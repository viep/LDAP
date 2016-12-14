var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LDAP APP' });
});

router.get('/adminUser',(req,res)=>{
console.log(req.body);
res.render('adminUser',{title:'Admin Home Page'});
});

router.get('/regularUser',(req,res)=>{
	res.render('regularUser',{title: 'User Home Page'})
})

router.get('/newUserData',(req,res)=>{
res.render('newUserData',{title: 'Create New User'
});
})
module.exports = router;
