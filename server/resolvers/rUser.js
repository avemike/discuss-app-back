module.exports = {
  Query: {
    users(_, { input }, ctx) {
      return ctx.User.find(input).exec();
    },
    user(_, { input }, ctx) {
      if (input.id) return ctx.User.findById(input.id).exec();
      return ctx.User.find(input).exec();
    },
  },
  Mutation: {
    async createUser(_, { input }, ctx) {
      return await new ctx.User(input).save();
    },
  },
  User: {
    async chats(user, _, ctx) {
      // const a = await ctx.Chat.find({ _id: { $in: user.chats } });
      console.log(user);
      return await ctx.Chat.find({ _id: { $in: user.chats } });

      // return [];
    },
  },
};
