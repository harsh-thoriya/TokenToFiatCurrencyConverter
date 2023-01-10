const express = require("express");
const redis = require("redis");
const routes = require("./src/routes");

const port = 80;

const app = express();
let redisConnection;
const server = app.listen(port, async () => {
  redisConnection = redis.createClient();
  redisConnection.on("error", (err) => console.log("Redis Client Error", err));
  await redisConnection.connect();
  console.log(`App listening on port ${port}`, redisConnection);
});

app.use(
  "/",
  (req, res, next) => {
    req.redisClient = redisConnection;
    next();
  },
  routes
);
