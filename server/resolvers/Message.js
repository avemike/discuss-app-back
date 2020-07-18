module.exports = {
  Query: {
    messages(_, { input }, ctx) {
      return ctx.Message.find(input).exec();
    },
    message(_, { input }, ctx) {
      if (input.id) return ctx.Message.findById(input.id).exec();
      return ctx.Message.find(input).exec();
    },
  },
  Mutation: {
    async createMessage(_, { input }, ctx) {
      const newMessage = await new ctx.Message(input).save();

      // update chat
      await ctx.Chat.findByIdAndUpdate(input.chat, {
        $push: {
          messages: newMessage._id,
        },
      });

      return newMessage;
    },
  },
  Message: {
    async chat(message, _, ctx) {
      return await ctx.Chat.findOne({ _id: message.chat }).exec();
    },
    async user(message, _, ctx) {
      return await ctx.User.findOne({ _id: message.user }).exec();
    },
  },
};
