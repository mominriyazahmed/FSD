const Contact = require("../models/contactModel")

exports.Inquiry = async (req, res) => {
    try {
        const user = await Contact.create(req.body)
        console.log(user)

        res.status(200).json({
            status: "success",
            data: user
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: "error",
            err
        })
    }

}