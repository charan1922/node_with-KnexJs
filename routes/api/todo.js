var express = require("express");
var router = express.Router();
var db = require("../../db");

router.get("/", function(req, res) {
  db
    .select()
    .from("todo")
    .then(function(data) {
      res.send(data);
    });
});

router.post("/", function(req, res) {
   db.insert(req.body).returning('*').into('todo').then(function(data){
       console.log(data)
   })
    res.send('hello post')
});

module.exports = router;
