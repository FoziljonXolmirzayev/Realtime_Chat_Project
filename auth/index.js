const { compare } = require("bcrypt");
const Users = require("../modules/user/model");
const { generateToken } = require("../services/jwt");
const { comparePassword } = require("../services/bcrypt");

module.exports.signUp = async (req, res) => {
  try {
    const foundUser = await Users.findOne({ name: req.body.username });
    console.log(req.body);
    if (foundUser) {
      res.status(401).send("this userName already exist! Choose another one!");
      return;
    }
    const createdUser = await Users.create({
      name: req.body.username,
      password: req.body.password,
    });
    const token = generateToken({ uid: createdUser._id });

    res.send({ userName: createdUser.username, token });
  } catch (error) {
    throw Error(error);
  }
};
module.exports.login = async (req, res) => {
  try {
    const foundUser = await Users.findOne({ name: req.body.userName });
    console.log(foundUser, req.body.userName);
    if (!foundUser) {
      res.send("user not found");
      return;
    }
    const isPassMatch = await comparePassword(
      foundUser.password,
      req.body.password
    );
    if (isPassMatch) {
      const generatedToken = generateToken({ uid: foundUser._id });
      res.send({ userName: foundUser.name, token: generatedToken });
    } else {
      res.send("unauthorized !");
    }
  } catch (error) {
    throw new Error(error);
  }
};
