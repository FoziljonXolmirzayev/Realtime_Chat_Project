const express = require("express");
const {
  createMessage,
  deleteMessage,
  updateMessage,
  getMessagesByChatId,
} = require("../modules/message");
const messageRoute = express.Router();

messageRoute.post("/create", createMessage);
messageRoute.get("/", getMessagesByChatId);
messageRoute.delete("/delete/:id", deleteMessage);
messageRoute.put("/update/:id", updateMessage);

module.exports = messageRoute;
