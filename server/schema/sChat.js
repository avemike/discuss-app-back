const { gql } = require("apollo-server");

const typeDefs = gql`
  type Chat {
    id: ID!
    name: String!
    users: [User!]!
    createdAt: String!
  }

  input ChatInput {
    id: ID
    name: String
    createdAt: String
    users: [ID]
  }

  input CreateChatInput {
    name: String!
    users: [ID!]!
  }

  input AddUsersToChatInput {
    chat: ID!
    users: [ID]!
  }
`;

module.exports = typeDefs;
