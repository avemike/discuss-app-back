const graphql = require('graphql')
const User = require('../models/user')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(_, input) {
        return User.findById(input.id)
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(_, __) {
        return User.find({})
      }
    }
  }
})


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(_, input) {
        const newUser = new User({
          username: input.username
        })
        return newUser.save()
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})