var express = require('express');
var router = express.Router();
var usermodel = require('./../models/userModel.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,items:["index01","index02","index03"]});
});


router.get('/index',function(req,res,next){
    usermodel.userlist.find(function(error,redata){
      if(error){
        res.send(error)
      }else{
        res.render('index',{title:"get result from mongodb ",items:redata});
      }
    })

})












module.exports = router;
