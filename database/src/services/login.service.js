const { login: model } = require('../models');
const { login: validation } = require('../validations');

const { authentication } = require('../tools')

const reject = {
    status: 401,
    msg: 'senha ou email invalidos'
}

module.exports = {
    getAll: async () => {;
        const result = await model.getAll();
        return {status: 200, result};
    },
    clientAcess: async (data) => {
        const validated = await validation(data);
        
        const client = await model.clientAcess(validated);
        
        if (!client || client === undefined) return reject;

        const token = authentication.createToken(client);
        const clientData = await model.clientInfo(client.name);
        return {
            status: 200, 
            result: {
                token,
                endpoint: client.endpoint,
                data: { ...clientData }
            }};
    }
};