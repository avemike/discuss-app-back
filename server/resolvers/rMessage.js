module.exports = {
  Query: {
    messages(_, {input}, ctx) {
      return ctx.Message.find(input).exec()
    },
    message(_, {input}, ctx) {
      if(input.id) return ctx.Message.findById(input.id).exec()
      return ctx.Message.find(input).exec()
    }
  },
  Mutation: {
    createMessage(_, {input}, ctx) {
      return new ctx.Message(input).save()
    }
  }
}