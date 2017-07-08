var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User= new Schema({

    name: String,
    phone: String,
    email: String,
    username: String,
    gender: String,
    sport: String
})
    


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
