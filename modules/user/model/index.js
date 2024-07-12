const { Schema, model } = require("mongoose");
const { hashPassword } = require("../../../services/bcrypt");
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
userSchema.pre("save", function () {
  this.password = hashPassword(this.password);
});
const Users = model("User", userSchema);

module.exports = Users;
