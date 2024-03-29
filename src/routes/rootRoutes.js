import express from "express";
import userRoutes from "./userRoutes.js";
import commentRoutes from "./commentRoutes.js";
import authRoutes from "./authRoutes.js";
import imageRoutes from "./imageRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
rootRoutes.use("/comment", commentRoutes);
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/image", imageRoutes)

export default rootRoutes;
