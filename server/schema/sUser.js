const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  input UserInput {
    id: ID
    username: String
  }

  input CreateUserInput {
    username: String!
  }

  type Query {
    user(input: UserInput): User
    users(input: UserInput): [User]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`

module.exports = typeDefs