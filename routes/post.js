const express = require("express");
const path = require("path");

const router = express.Router(); 
const {posts} = require("./admin");

const postController = require("../controllers/post");


router.get("/",postController.getPosts);

router.get("/post/:postId",postController.getPost);





module.exports = router;