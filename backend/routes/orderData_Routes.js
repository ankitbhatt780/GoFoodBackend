const express = require("express");
const { order_data, MyOrderData } = require("../Controller/OrderData_contrller")

const router = express.Router();

router.route("/orderData").post(order_data)
router.route("/MyorderData").post(MyOrderData)

module.exports = router;
