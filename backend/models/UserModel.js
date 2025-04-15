const mongoose = require('mongoose');

//shema

const userSchema = new mongoose.Schema(
    {
        username : {type : String , required: true},
        password : {type : String , required:true},
        firstName : {type : String , default : ""},
        lastName : {type : String , default : ""},
        email : {type : String , default : ""},
        mobileNumber : {type : String , default : ""}
    }
);

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;