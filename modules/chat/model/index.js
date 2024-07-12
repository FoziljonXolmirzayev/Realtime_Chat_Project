const { Schema, model, SchemaTypes } = require("mongoose");

const chatSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  background: String,
  isDeleted: Boolean,
});

const Chats = model("Chat", chatSchema);
module.exports = Chats;
