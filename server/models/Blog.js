import mongoose from "mongoose";

const blogShema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content: {
       type: String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },


})

export const Blog = mongoose.model("blogs", blogShema);
