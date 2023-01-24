const mongoose = require('mongoose');
var Audio = mongoose.model('audio',{
    name : { type : String },
    image : { type : String },
    description : { type : String },
    song : { type : String }
});
module.exports = { Audio };