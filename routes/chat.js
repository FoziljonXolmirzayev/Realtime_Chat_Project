const express = require("express");
const {
  createChat,
  getChats,
  deleteChat,
  updateChat,
} = require("../modules/chat");
const chatRoute = express.Router();

chatRoute.post("/create", createChat);
chatRoute.get("/", getChats);
chatRoute.put("/update/:id", updateChat);
chatRoute.delete("/delete/:id", deleteChat);

module.exports = chatRoute;
