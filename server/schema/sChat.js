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
  }

  input CreateChatInput {
    name: String!
  }
`;

module.exports = typeDefs;
