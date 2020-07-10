const { gql } = require("apollo-server");
// const Chat = require('./sChat')

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    chats: [Chat]!
  }

  input UserInput {
    id: ID
    username: String
    email: String
    createdAt: String
  }

  input CreateUserInput {
    username: String!
    email: String!
  }
`;

module.exports = typeDefs;
