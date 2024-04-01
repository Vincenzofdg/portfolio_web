const Joi = require('joi');

module.exports = {
    create: Joi.object({
        username: Joi.string().min(4).required(),
        password: Joi.string().min(4).required(),
    }),
}