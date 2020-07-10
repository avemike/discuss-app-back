const mongoose = require('mongoose')
const UserSchema = require('./mUser')

module.exports = {
  User: mongoose.model('User', UserSchema)
}