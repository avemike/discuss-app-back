const User = require("./User");
const Chat = require("./Chat");
const Message = require("./Message");

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
  User: User.User,
  Chat: Chat.Chat,
  Message: Message.Message,
};
