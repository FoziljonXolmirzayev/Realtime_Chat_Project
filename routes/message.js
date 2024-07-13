const express = require("express");
const {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
  updateMessage,
} = require("../modules/message");
const messageRoute = express.Router();

messageRoute.post("/create", createMessage);
messageRoute.get("/", getMessages);
messageRoute.get("/:id", getMessage);
messageRoute.delete("/delete/:id", deleteMessage);
messageRoute.put("/update/:id", updateMessage);

module.exports = messageRoute;
