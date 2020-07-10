module.exports = {
  Query: {
    users(_, {input}, ctx) {
      return ctx.User.find(input)
    },
    user(_, {input}, ctx) {
      if(input.id) return ctx.models.User.findById(input.id)
      return ctx.User.find(input)
    }
  },
  Mutation: {
    createUser(_, {input}, ctx) {
      return new ctx.User(input).save() 
    }
  }
}