const { decodeToken } = require("../../services/jwt");
const Message = require("./model");

module.exports.createMessage = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userId = decodeToken(token).uid;
    const createdMessage = await Message.create({
      message: req.body.message,
      sendedBy: userId,
    });

    res.send(createdMessage);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getMessages = async (req, res) => {
  try {
    const allMessages = await Message.find({}).populate("sendedBy");
    res.send(allMessages);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getMessage = async (req, res) => {
  try {
    const foundMessage = await Message.findById(req.params.id);
    res.send(foundMessage);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteMessage = async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    res.send(deletedMessage);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateMessage = async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedMessage);
  } catch (error) {
    throw new Error();
  }
};
