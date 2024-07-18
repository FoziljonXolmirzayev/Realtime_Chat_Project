const Chats = require("./model");
const validateChatCreate = require("./validators");

module.exports.createChat = async (req, res) => {
  try {
    const { error } = validateChatCreate(req.body);
    if (error) {
      throw new Error(error.message);
    }
    const createdChat = await Chats.create(req.body);
    res.send(createdChat);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getChats = async (req, res) => {
  try {
    const chatsInfo = await Chats.find({});
    res.send(chatsInfo);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteChat = async (req, res) => {
  try {
    const deletedChat = await Chats.findOneAndDelete(req.params.id);
    if (deletedChat) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateChat = async (req, res) => {
  try {
    const updatedChat = await Chats.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedChat);
  } catch (error) {
    throw new Error(error);
  }
};
