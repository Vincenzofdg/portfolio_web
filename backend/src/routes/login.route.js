const { Router } = require("express");

const { login: controller } = require('../controllers');

const { getAll, clientAcess } = controller;

const login = Router();

login
     .get("/", getAll)
     .post("/", clientAcess);

module.exports = login;