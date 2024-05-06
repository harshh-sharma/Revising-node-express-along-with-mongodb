const mongoose = require("mongoose");

const connectToDb = async() => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/ejs");
    if(connection){
        console.log("DB connected successfully");
    }
}

module.exports = connectToDb;