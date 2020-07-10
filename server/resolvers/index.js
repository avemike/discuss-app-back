const User = require('./rUser')

module.exports = {
  Query: {
    ...User.Query
  },
  Mutation: {
    ...User.Mutation
  }
}