const { Router } = require("express");

const { products: controller } = require('../controllers');

const { getAll, updatePublish } = controller;
const { token } = require('../middlewares');

const login = Router();

login
     .get("/", getAll)
     .put("/:id", [token, updatePublish])

module.exports = login;