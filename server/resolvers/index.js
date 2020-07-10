const User = require('./rUser')
const Chat = require('./rChat')
const Message = require('./rMessage')

module.exports = {
  Query: {
    ...User.Query,
    ...Chat.Query,
    ...Message.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Chat.Mutation,
    ...Message.Mutation
  }
}