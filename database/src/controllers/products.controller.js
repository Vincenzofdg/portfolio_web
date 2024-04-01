const { products: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    updatePublish: async (req, res, _next) => {
        const { id } = req.params;
        const { value } = req.body;
        const { status } = await service.updatePublish(value, id);
        return res.status(status).json({msg: "Value Updated"});
    }
};