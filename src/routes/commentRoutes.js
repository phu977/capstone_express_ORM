import express from "express";
import {
  createComment,
  getCommentImage,
} from "../controllers/commentController.js";

const commentRoutes = express.Router();

commentRoutes.post("/create-comment", createComment);
commentRoutes.get("/get-infor-comment/:imageID", getCommentImage);

export default commentRoutes;
