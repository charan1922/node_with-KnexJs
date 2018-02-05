var express = require("express");
var router = express.Router();
var db = require("../../db");

router.get("/", function(req, res) {
  db
    .select()
    .from("todo")
    .orderBy("id")
    .then(function(data) {
      res.send(data);
    });
});

router.post("/", function(req, res) {
    // INSERT INTO `todo`( `userId`, `dishId`, ) VALUES ([value-1],[value-2])
     // SELECT * FROM TABLE WHERE Id = ourId (related returning('*))
    
  db
    .insert(req.body)
    .returning("*")
    .into("todo")
    .then(function(data) {
      console.log(data);
    });
  res.send("hello post");
});

router.patch("/:id", function(req, res) {
    
   //PATCH is like put and it wil not assign NULL if it is not there, assign  only what it has
  db("todo")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then(function(data) {
      res.send(data);
    });

  
});

router.put("/:id", function(req, res) {
    // UPDATE `cart` SET `createdAt`=[value-1],`updatedAt`=[value-2],`id`=[value-3],`userId`=[value-4],`dishId`=[value-5],`quantity`=[value-6] WHERE 1
     // SELECT * FROM TABLE WHERE Id = ourId (returning('*))
  db("todo")
    .where({ id: req.params.id })
    .update({
      title: req.body.title || null,
      is_done: req.body.is_done || null
    })
    .returning("*")
    .then(function(data) {
      res.send(data);
    });
});

router.delete("/:id", function(req, res) {
  db("todo")
    .where({ id: req.params.id })
    .del()
    .then(function() {
      res.json({ success: true });
    });
});


// SELECT * FROM TABLE WHERE Id = ourId
router.get("/:id", function(req, res) {
  db("todo")
    .where({ id: req.params.id })
    .select()
    .then(function(data) {
      res.send(data);
    });
});

module.exports = router;
