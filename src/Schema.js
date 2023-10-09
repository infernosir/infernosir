const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Phone:String,
    Message:String,
})
module.exports= mongoose.model('Response',userSchema)