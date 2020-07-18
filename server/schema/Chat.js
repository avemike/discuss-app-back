const { gql } = require("apollo-server");

const typeDefs = gql`
  type Chat {
    id: ID!
    name: String!
    users: [User!]!
    messages: [Message]
    createdAt: String!
  }

  input ChatInput {
    id: ID
    name: String
    createdAt: String
    users: [ID]
    messages: [ID]
  }

  input CreateChatInput {
    name: String!
    users: [ID!]!
    messages: [ID]!
  }

  input AddUsersToChatInput {
    chat: ID!
    users: [ID]!
  }

  extend type Query {
    chat(input: ChatInput): Chat
    chats(input: ChatInput): [Chat]!
  }

  extend type Mutation {
    createChat(input: CreateChatInput!): Chat!
    addUsersToChat(input: AddUsersToChatInput!): Chat!
  }
`;

module.exports = typeDefs;
