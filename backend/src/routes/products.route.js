const { Router } = require("express");

const { products: controller } = require('../controllers');

const { getAll } = controller;
const { token } = require('../middlewares');

const login = Router();

login
     .get("/", [token, getAll])

module.exports = login;