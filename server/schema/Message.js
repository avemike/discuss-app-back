const { gql } = require("apollo-server");

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
    user: ID!
    chat: ID!
    content: String!
  }

  extend type Query {
    message(input: MessageInput): Message
    messages(input: MessageInput): [Message]!
  }

  extend type Mutation {
    createMessage(input: CreateMessageInput!): Message!
  }
`;

module.exports = typeDefs;
