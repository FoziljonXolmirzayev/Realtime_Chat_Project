const { Schema, model } = require("mongoose");
const { hashPassword } = require("../../../services/bcrypt");

const userSchema = new Schema({
  name: String,
  password: String,
});

userSchema.pre("save", async function () {
  this.password = await hashPassword(this.password);
});

const Users = model("User", userSchema);

module.exports = Users;
