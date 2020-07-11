module.exports = {
  Query: {
    chats(_, { input }, ctx) {
      return ctx.Chat.find(input).exec();
    },
    async chat(_, { input }, ctx) {
      if (input && input.id) return ctx.Chat.findById(input.id).exec();

      const chat = await ctx.Chat.findOne(input).exec();
      return chat;
    },
  },
  Mutation: {
    async createChat(_, { input }, ctx) {
      const newChat = await new ctx.Chat(input).save();

      await ctx.User.updateMany(
        {
          _id: {
            $in: input.users,
          },
        },
        {
          $push: {
            chats: newChat._id,
          },
        },
        { new: true }
      );

      return newChat;
    },

    async addUsersToChat(_, { input }, ctx) {
      // push chat.id to user.chats
      await ctx.User.updateMany(
        {
          _id: {
            $in: input.users,
          },
        },
        {
          $push: {
            chats: input.chat,
          },
        }
      );

      // push each user id to chat.users
      const updatedChat = await ctx.Chat.findOneAndUpdate(
        input.chat,
        {
          $push: {
            users: { $each: input.users },
          },
        },
        { new: true }
      );

      return updatedChat;
    },
  },
  Chat: {
    async users(chat, _, ctx) {
      return await ctx.User.find({ _id: { $in: chat.users } });
    },
  },
};
