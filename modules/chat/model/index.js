const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  background: String,
  isDeleted: Boolean,
  sender: { type: Schema.Types.ObjectId, ref: "User" },
});

const Chats = model("Chat", chatSchema);
module.exports = Chats;
