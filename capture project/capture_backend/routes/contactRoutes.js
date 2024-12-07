const express = require("express")
const { Inquiry } = require("../controllers/contactControllers")

const router = express.Router()

router.post("/inquiry", Inquiry)

module.exports = router