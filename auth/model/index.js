const { Schema, model } = require("mongoose");

const authSchema = new Schema({
  userName: String,
  userEmail: String,
  userPassword: String,
});
const Auth = model("User", authSchema);
module.exports = Auth;
