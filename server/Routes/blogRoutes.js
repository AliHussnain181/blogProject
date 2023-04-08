import express from "express"
import { addBlog, deleteProduct, getBlog, specificBlog } from "../Controllers/Blog.js";
import { authorizeAdmin, isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router();

router.post("/add",isAuthenticated,authorizeAdmin,addBlog)
router.get("/blog",getBlog)
router.delete("/blog/:id",isAuthenticated,authorizeAdmin,deleteProduct)
router.get("/blog/:title",specificBlog)

export default router