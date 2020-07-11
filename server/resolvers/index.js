const User = require("./rUser");
const Chat = require("./rChat");
const Message = require("./rMessage");

const pullOutRestResolvers = (resolvers) => {
  // eslint-disable-next-line no-unused-vars
  const { Query, Mutation, ...Rest } = { ...resolvers };
  return Rest;
};
module.exports = {
  Query: {
    ...User.Query,
    ...Chat.Query,
    ...Message.Query,
  },
  Mutation: {
    ...User.Mutation,
    ...Chat.Mutation,
    ...Message.Mutation,
  },
  ...pullOutRestResolvers(User),
  ...pullOutRestResolvers(Chat),
  ...pullOutRestResolvers(Message),
};
