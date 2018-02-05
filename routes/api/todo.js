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

router.patch('/:id', function (req,res) {
db('todo').where({id:req.params.id}).update(req.body).returning('*').then(function(data){
    res.send(data)
})
    // SELECT * FROM TABLE WHERE Id = ourId
})


router.put('/:id', function (req,res) {
    db('todo').where({id:req.params.id}).update({
        title:req.body.title || null,
       is_done:req.body.is_done || null,
     }).returning('*').then(function(data){
        res.send(data)
    })
    })




module.exports = router;