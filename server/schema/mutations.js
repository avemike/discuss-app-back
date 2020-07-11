const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    createUser(input: CreateUserInput!): User!

    createChat(input: CreateChatInput!): Chat!
    addUsersToChat(input: AddUsersToChatInput!): Chat!

    createMessage(input: CreateMessageInput!): Message!
  }
`;

module.exports = typeDefs;
