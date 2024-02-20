const { Router } = require("express");

const { login: controller } = require('../controllers');

const { clientAcess } = controller;

const login = Router();

login
     .post("/", clientAcess);

module.exports = login;