import express from "express";
import {
  getImageSaveByUser,
  getImageCreateByUser,
  deleteImage,
  getListImage,
  searchImage,
  getInfoImageUser,
  createImage,
} from "../controllers/imageController.js";
import uploadCloud from "../configs/cloudinary.config.js";

const imageRoutes = express.Router();

imageRoutes.get("/get-list-image", getListImage);
imageRoutes.get("/search-image/:name", searchImage);
imageRoutes.get("/info-image-user/:imageID", getInfoImageUser);
imageRoutes.get("/get-list-image-save-by-user/:userID", getImageSaveByUser);
imageRoutes.get("/get-list-image-create-by-user/:userID", getImageCreateByUser);
imageRoutes.delete("/delete-image/:imageID", deleteImage);
imageRoutes.post("/create-image",  uploadCloud.single('file'), createImage);

export default imageRoutes;
