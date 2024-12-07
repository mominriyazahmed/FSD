const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    Name: {
        type: String,
        required : true
    },
    Surname: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required:true
    },
    StartDate: {
        type: String,
        required: true
    },
    EndDate: {
        type:String,
        required: true
    },
    Venue: {
        type:String,
        required: true
    },
    Ocassion: {
        type:String,
        required: true
    },
    websiteURL: String,
    type:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("capture", contactSchema)