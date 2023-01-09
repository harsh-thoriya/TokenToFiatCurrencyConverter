const express = require("express");
const routes = require("./src/routes");

const port = 80;

const app = express();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
app.use("/", routes);
