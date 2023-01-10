const express = require("express");
const redis = require("redis");
const routes = require("./src/routes");

const port = 80;

const app = express();
let redisConnection;
const server = app.listen(port, () => {
  let redisClient = redis.createClient();
  redisClient.on("error", (err) => console.log("Redis Client Error", err));
  redisConnection = redisClient.connect();
  console.log(`App listening on port ${port}`);
});

app.use(
  "/",
  (req, res, next) => {
    req.redisClient = redisClient;
    next();
  },
  routes
);
