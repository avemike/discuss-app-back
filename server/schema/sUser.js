const { gql } = require("apollo-server");
// const Chat = require('./sChat')

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    chats: [Chat]!
    messages: [Message]!
  }

  input UserInput {
    id: ID
    username: String
    email: String
    createdAt: String
    messages: [ID]
  }

  input CreateUserInput {
    username: String!
    email: String!
  }
`;

module.exports = typeDefs;
