const express = require("express");
const { signUp, login } = require("../auth");
const { wss } = require("../actions/chat");
const authRoute = express.Router();

authRoute.post("/signup", signUp);
authRoute.post("/login", login);

module.exports = authRoute;
