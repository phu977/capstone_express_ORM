import express from "express";
import { login, signUp } from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signUp", signUp);
export default authRoutes;
