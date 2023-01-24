const mongoose = require('mongoose');
var login = mongoose.model('login',{
    username : { type : String, default : "root" },
    password : { type : String , default : "root" }
});
module.exports = { login };