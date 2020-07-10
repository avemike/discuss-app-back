const mongoose = require("mongoose");
const UserSchema = require("./mUser");
const ChatSchema = require("./mChat");
const MessageSchema = require("./mMessage");

module.exports = {
  User: mongoose.model("User", UserSchema),
  Chat: mongoose.model("Chat", ChatSchema),
  Message: mongoose.model("Message", MessageSchema),
};
