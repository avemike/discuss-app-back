const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  chat: {
    type: Schema.Types.ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Number
  }
}, {
  timestamps: {
    updatedAt: 'updatedAt'
  }
})

module.exports = MessageSchema