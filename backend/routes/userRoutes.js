const express = require("express")
const { newUser, loginUser } = require("../Controller/user_controller")

const router = express.Router()

router.route("/newUser").post(newUser)
router.route("/loginuser").post(loginUser)

module.exports = router;