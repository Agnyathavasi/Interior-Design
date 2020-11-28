var mongoose = require('mongoose');

var registerSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        phno:Number,
        city_name:String,
        message:String
    }
);

module.exports = mongoose.model('contact',registerSchema);