const Joi = require("joi");

module.exports.validateChatCreate = (data) => {
  const schema = Joi.object({
    receiver: Joi.string().required(),
    sender: Joi.string().required(),
  });
  return schema.validate(data);
};
module.exports.validateGetChats = (data) => {
  const schema = Joi.object({
    _id: Joi.string().required(),
  });
  return schema.validate(data);
};
