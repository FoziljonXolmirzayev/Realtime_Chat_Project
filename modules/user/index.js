const Users = require("./model");

module.exports.createUser = async (req, res) => {
  try {
    const createdUser = await Users.create(req.body);
    res.send(createdUser);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getUsers = async (req, res) => {
  try {
    const usersInfo = await Users.find({});
    res.send(usersInfo);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getOneUser = async (req, res) => {
  try {
    const userInfo = await Users.findOne({ _id: req.params.id });
    res.send(userInfo);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await Users.findOneAndDelete(req.params.id);
    res.send(deletedUser);
  } catch (error) {
    throw new Error(error);
  }
};
