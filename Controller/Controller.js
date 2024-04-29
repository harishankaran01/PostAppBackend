const express=require("express");
const expressAsyncHandler=require("express-async-handler");
const PostModel = require("../Model/PostModel");
const getPost=expressAsyncHandler(async(req,res)=>{
    const Posts=await PostModel.find();
    console.log(Posts);
    if(Posts.length<0)
       throw new Error("No Posts post Yet");
    res.statusCode=200
    res.json(Posts)
})
const getAPost=expressAsyncHandler(async(req,res)=>{
    console.log("hi",req.params.id);
    const Post=await PostModel.findById(req.params.id);
    console.log(Post);
    if(Post.length<=0){
        res.statusCode=404;
        throw new Error("No Post found");
    }
    res.statusCode=200
    res.json(Post)
})
const FeedPost=expressAsyncHandler(async(req,res)=>{
    const {title,description}=req.body;
    if(!title,!description){
        res.statusCode=404;
        throw new Error("Post required title and description");
    }
    const post=await PostModel.create({
        Title:title,Description:description
    })
    console.log(post);
    res.statusCode=201
    res.json({
        message:"Your Post added"
    })

})
module.exports={
    FeedPost,
    getAPost,
    getPost
}