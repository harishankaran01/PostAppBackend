const express=require("express");
const router=express.Router();
const controls=require("../Controller/Controller")
router.route("/getPost").get(controls.getPost);
router.route("/getPost/:id").get(controls.getAPost);
router.route("/addPost").post(controls.FeedPost);
module.exports=router;
