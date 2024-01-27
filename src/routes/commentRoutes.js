import express from "express";
import {
  createComment,
  getCommentImage,
} from "../controllers/commentController.js";
import { khoaAPI } from "../configs/jwt.js";

const commentRoutes = express.Router();

commentRoutes.post("/create-comment", khoaAPI, createComment);
commentRoutes.get("/get-infor-comment/:imageID", getCommentImage);

export default commentRoutes;
