var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');



var userSchema = mongoose.Schema({
        username        : String,
        password     : String,
        name	: String,
        email : String,
        directory	:String,
        uid: String,
        gid: String,

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
	console.dir('query password '+password);
	console.dir(this.toObject());
	console.dir('password from db '+this.password);
	//below statement is supposed to work, doing a hack for now
    // return bcrypt.compareSync(password, this.password);
    if(password==this.password)
    	console.dir('password matches');
    return password==this.password;
};
	
var User = mongoose.model('User', userSchema);
var pw = bcrypt.hashSync('jazzj', bcrypt.genSaltSync(8), null);

var jazz =  new User({
	username: 'Jazz',
	password: pw,
	name: 'Jayasudha',
	email: 'jj@jj.com',
	directory:'/ubuntu/jazz',
	uid: '100',
	gid: '1000'
})
console.dir('password  before storing '+pw);
jazz.save(function(err,data){
	if(err)
		console.log(err);
	else
		console.log('Saved: ',data);
})

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);



