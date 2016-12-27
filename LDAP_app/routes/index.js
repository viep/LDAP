var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LDAP APP' });
});

router.get('/about',function(req,res){
	res.render('about',{title:'About'});
});

router.get('/contact',function(req,res){
	res.render('contact',{title:'Contact Us'});
});
router.get('/adminUser',function(req,res){
console.log(req.body);
res.render('adminUser',{title:'Admin Home Page'});
});

router.get('/regularUser',function(req,res){
	res.render('regularUser',{title: 'User Home Page'})
});

router.get('/newUserData',function(req,res){
res.render('newUserData',{title: 'Create New User'
});
console.log(req.body);
});



router.get('/createUser',function(req,res){
	var username = req.query.username;
	var name = req.query.name;
	var email = req.query.email;
	var password = req.query.password;
	var directory = req.query.homedirectory;
	var uid = req.query.uid;
	var gid = req.query.gid;
	var txt = "dn: uid="+username+",ou=People,dc=summer,dc=sv.cmu.local \nuid:"+username+"\ncn:"+username+"\nsn:"+username+"\nmail:"+email+"\nobjectClass: person\nobjectClass: organizationalPerson\nobjectClass: inetOrgPerson\nobjectClass: posixAccount\nobjectClass: top\nobjectClass: shadowAccount"
	txt = txt + "\nuserPassword: "+password+"\nshadowLastChange: 17128\nshadowMin: 0\nshadowMax: 99999\nshadowWarning: 7\nloginShell: /bin/bash\nuidNumber: "+uid+"\ngidNumber: "+gid+"\nhomeDirectory:"+directory;
	console.log(txt);

	fs.writeFile('ldifFiles/data.ldif',txt,function(err){
		if(err)
			throw err;
		console.log("wrote to file")
	})
	res.render('createUser',{title: 'Successfully created'});
	console.log(req.query.name);
});



module.exports = router;
