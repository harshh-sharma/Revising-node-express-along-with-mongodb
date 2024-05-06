const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    image:{
        type:String,
        required:[true,"image is required"]
    }
});

module.exports = mongoose.model("User",userSchema);