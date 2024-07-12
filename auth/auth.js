const Users = require("../modules/user/model");

module.exports.signIn = async (req, res) => {
  try {
    const signingIn = await Users.create(req.body);
    res.send(signingIn);
  } catch (error) {
    throw Error(error);
  }
};
module.exports.signUp = async (req, res) => {
  try {
    const signingUp = await Users.find(req.body);
    res.send(signingUp);
  } catch (error) {
    throw new Error(error);
  }
};
