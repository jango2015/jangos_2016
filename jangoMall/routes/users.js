var express = require('express');
var router = express.Router();

// var demos = require("./../service/mongoservice.js")
var demos = require("./../models/userModel.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
   demos.userlist.find(function(error,result){
     if(error){
       res.send(error);
      //  var  list = ["user01","user02","user03"];
      //  res.render('index',{title:"hahahaha",items:list});
     }else{
       
       res.render('index',{title:"hahahaha",items:result});
     }

   })

  
});

module.exports = router;
