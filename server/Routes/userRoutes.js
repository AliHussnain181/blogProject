import express from "express";
import { getMyProfile, login, logout, register } from "../Controllers/User.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile)



export default router;
