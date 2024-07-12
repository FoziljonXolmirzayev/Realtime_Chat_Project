const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  sendedBy: { type: Schema.Types.ObjectId, ref: "User" },
  message: String,
  sendedAt: { type: Date, default: Date.now },
  isRead: Boolean,
  chatId: { type: Schema.Types.ObjectId, ref: "Chat" },
});

const Message = model("Message", messageSchema);

module.exports = Message;
