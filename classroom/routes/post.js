const express = require("express");
const router = express.Router();


//Index 
router .get("/", (req, res)=>{
    res.send("Get for posts");
});

//Show
router .get("/:id", (req, res)=>{
    res.send("Show for show posts id");
});

//Post 
router .post("/", (req, res)=>{
    res.send("Post for  posts");
});

//Delete  
router .delete("/:id", (req, res)=>{
    res.send("Delete for  posts id");
});

module.exports = router;