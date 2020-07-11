const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  chats: {
    type: [Schema.Types.ObjectId],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = UserSchema;
