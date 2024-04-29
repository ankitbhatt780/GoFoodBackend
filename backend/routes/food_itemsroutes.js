const express = require("express");
const getAlldata = require("../Controller/food_itemsController");
const router = express.Router();

router.route("/getalldata").post(getAlldata);

module.exports = router;
