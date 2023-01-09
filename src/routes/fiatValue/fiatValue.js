const express = require("express");
const fiatValueController = require("../../controllers/fiatValue/fiatValue.controller");

const router = express.Router();

router.get("/", fiatValueController.get);

module.exports = router;
