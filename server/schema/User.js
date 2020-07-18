const { gql } = require("apollo-server");

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

  type Query {
    user(input: UserInput): User
    users(input: UserInput): [User]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;

module.exports = typeDefs;
