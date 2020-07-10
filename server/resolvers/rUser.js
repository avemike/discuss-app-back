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
    createUser(_, { input }, ctx) {
      return new ctx.User(input).save();
    },
  },
};
