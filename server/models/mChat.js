const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
  messages: {
    type: [Schema.Types.ObjectId],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ChatSchema;
