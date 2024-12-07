const mongoose = require("mongoose")
const app = require("./index")

const port = 3700

mongoose.connect('mongodb://127.0.0.1:27017/capture').then(() => console.log("connected successfully"))

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})