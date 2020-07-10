module.exports = {
  Query: {
    chats(_, {input}, ctx) {
      return ctx.Chat.find(input).exec()
    },
    chat(_, {input}, ctx) {
      if(input && input.id) return ctx.Chat.findById(input.id).exec()
      return ctx.Chat.find(input).exec()
    }
  },
  Mutation: {
    createChat(_, {input}, ctx) {
      return new ctx.Chat(input).save()
    }
  }
}