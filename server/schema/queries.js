const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    user(input: UserInput): User
    users(input: UserInput): [User]!

    chat(input: ChatInput): Chat
    chats(input: ChatInput): [Chat]!
  
    message(input: MessageInput): Message
    messages(input: MessageInput): [Message]!
  }
`

module.exports = typeDefs