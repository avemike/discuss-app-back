const { gql } = require('apollo-server')

const typeDefs = gql`
  type Message {
    id: ID!
    user: User
    chat: Chat
    content: String!
    createdAt: String!
    updatedAt: String
  }

  input MessageInput {
    id: ID
    content: String
    createdAt: String
    updatedAt: String
  }

  input CreateMessageInput {
    content: String!
  }
`

module.exports = typeDefs