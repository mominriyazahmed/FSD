const express = require("express")
const cors = require("cors")
const contactRoutes = require("./routes/contactRoutes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", contactRoutes)

module.exports = app