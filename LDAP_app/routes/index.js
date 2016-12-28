var express = require('express');
var router = express.Router();
var fs = require('fs');
var passport = require('passport')
var session = require('express-session');

var mongoose = require('mongoose');
var passport = require('passport');

var	 flash    = require('connect-flash');

var configDB = require('../config/database.js');
mongoose.connect(configDB.url);
require('../config/passport')(passport); // pass passport for configuration

// required for passport
router.use(session({ secret: 'ijustdontgetthisshitandiamnotkidding' })); // session secret
router.use(passport.initialize());
router.use(passport.session()); // persistent login sessions
router.use(flash()); // use connect-flash for flash messages stored in session

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LDAP APP' });
});

    // process the login form
 router.post('/', passport.authenticate('local-login', {
   successRedirect : '/profile', // redirect to the secure profile section
   failureRedirect : '/', // redirect back to the signup page if there is an error
   failureFlash : true // allow flash messages
  }));
router.get('/about',function(req,res){
	res.render('about',{title:'About'});
})



router.get('/contact',function(req,res){
	res.render('contact',{title:'Contact Us'});
})
router.get('/profile',function(req,res){
console.log(req.body);
console.log(req.user);
res.render('profile',{title:'Admin Home Page',user : req.user});
});
router.get('/regularUser',function(req,res){
	res.render('regularUser',{title: 'User Home Page'})
})

router.get('/newUserData',function(req,res){
res.render('newUserData',{title: 'Create New User'
});
console.log(req.body);
})

router.post('/newUserData',function(req,res){
	var username = req.body.username;
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var directory = req.body.homedirectory;
	var uid = req.body.uid;
	var gid = req.body.gid;
	var txt = "dn: uid="+username+",ou=People,dc=summer,dc=sv.cmu.local \nuid:"+username+"\ncn:"+username+"\nsn:"+username+"\nmail:"+email+"\nobjectClass: person\nobjectClass: organizationalPerson\nobjectClass: inetOrgPerson\nobjectClass: posixAccount\nobjectClass: top\nobjectClass: shadowAccount"
	txt = txt + "\nuserPassword: "+password+"\nshadowLastChange: 17128\nshadowMin: 0\nshadowMax: 99999\nshadowWarning: 7\nloginShell: /bin/bash\nuidNumber: "+uid+"\ngidNumber: "+gid+"\nhomeDirectory:"+directory;
	console.log(txt);
	fs.writeFile('ldifFiles/data.ldif',txt,function(err){
		if(err)
			throw err;
		console.log("wrote to file")

	})
	res.redirect('/createUser');

});
router.get('/createUser',function(req,res){
	res.render('createUser',{title: 'Successfully created'});
	console.log(req.query.name);
});
router.get('/about',(req,res)=>{
	res.render('about',{title:'About'});
});


module.exports = router;
