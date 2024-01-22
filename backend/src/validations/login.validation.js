const { login: schema } = require('./schemas');

module.exports = async (content) => {
    const result = await schema.create.validateAsync(content);
    return result;
}