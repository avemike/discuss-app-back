const UserSchema = require('./sUser')
const ChatSchema = require('./sChat')
const MessageSchema = require('./sMessage')
const Queries = require('./queries')
const Mutations = require('./mutations')

module.exports = [UserSchema, ChatSchema, MessageSchema, Queries, Mutations]