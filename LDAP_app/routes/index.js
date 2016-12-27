var express = require('express');
var router = express.Router();

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
	res.render('createUser',{title: 'Successfully created'});
	console.log(req.body);
});


module.exports = router;
