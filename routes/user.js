const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../modules/user");
const usersRoute = express.Router();

usersRoute.post("/create", createUser);
usersRoute.get("/get", getUsers);
usersRoute.get("/get/:id", getOneUser);
usersRoute.put("/update/:id", updateUser);
usersRoute.delete("/delete/:id", deleteUser);

module.exports = usersRoute;
