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
`;

module.exports = typeDefs;
