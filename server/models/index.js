const mongoose = require("mongoose");
const UserSchema = require("./User");
const ChatSchema = require("./Chat");
const MessageSchema = require("./Message");

module.exports = {
  User: mongoose.model("User", UserSchema),
  Chat: mongoose.model("Chat", ChatSchema),
  Message: mongoose.model("Message", MessageSchema),
};
