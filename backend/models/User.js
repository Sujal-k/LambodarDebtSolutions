const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    jobRole:{
        type:String,
        enum: ['Back Office Executive', 'Telecaller', 'Field Executive'],//Yet to reflect on frontend
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

//Here we will implement otp verification system before the production

const User = mongoose.model("User",UserSchema);
module.exports = { User };