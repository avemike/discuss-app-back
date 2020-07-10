const UserSchema = require('./sUser')
const ChatSchema = require('./sChat')
const Queries = require('./queries')
const Mutations = require('./mutations')

module.exports = [UserSchema, ChatSchema, Queries, Mutations]