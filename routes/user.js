const express = require("express");
const { getUsers } = require("../modules/user");
const userRoute = express.Router();

userRoute.get("/", getUsers);
