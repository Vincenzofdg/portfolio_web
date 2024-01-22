const express = require("express");
require("express-async-errors");

const routes = require("./routes");
const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();

api.use(express.json());
api.use(cors);

// Requests
api.use("/login", routes.login);

api.use(errorHandler);

module.exports = api;
