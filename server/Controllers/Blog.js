import { Blog } from "../models/Blog.js";
import ErrorHandler from "../Utils/errorHandler.js";


export const addBlog = async (req, res, next) => {
  try {
    const { title, content, image, author } = req.body;
    await Blog.create({
      title,
      content,
      image,
      author
    })
    res.status(200).json({
      success: true,
      message:"blog added"
    })
  }
  catch (err) {
    next(err)
  }
}

export const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.find()
    res.status(200).json(blog)
  } catch (error) {
    next(error)
  }
}



export const deleteProduct = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id)
    if (!blog) return next(new ErrorHandler("not found blog", 404))

    await blog.deleteOne()

    res.status(200).json({
      success: true,
      message: "blog deleted"
    })
  }
  catch (error) {
    next(error)
  }

}

export const specificBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOne(
      {
        title: req.params.title
      }
    )
    if (!blog) return next(new ErrorHandler("not found blog", 404))
    res.status(200).json(blog)
  } catch (error) {
    next(error)
  }
}
