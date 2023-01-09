const express = require("express");
const fiatValueRoutes = require("./fiatValue/fiatValue");
const { rateLimiter } = require("../helpers/rateLimiter");

const app = express();

app.use("/fiatValue", rateLimiter(24 * 60 * 60 * 1000, 100), fiatValueRoutes);

module.exports = app;
