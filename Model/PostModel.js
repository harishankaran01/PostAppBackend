const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    Title:{
        type:String,
        required:[true,"Title Should not be Empty"],
        nullable:false
    },
    Description:{
        type:String,
        required:[true,"Description Should not be Empty"],
        nullable:false
    }
})
module.exports=mongoose.model("PostCollection",PostSchema);