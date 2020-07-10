const { gql } = require('apollo-server')

const typeDefs = gql`
  type Mutation {
    createUser(input: CreateUserInput!): User!
    
    createChat(input: CreateChatInput!): Chat!
    
    createMessage(input: CreateMessageInput!): Message!
  }
`

module.exports = typeDefs