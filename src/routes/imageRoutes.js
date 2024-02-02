import express from 'express'
import {
  getImageSaveByUser,
  getImageCreateByUser,
  deleteImage,
  getListImage,
  searchImage,
  getInfoImageUser,
  createImage,
  getinfoImageSaveImageID,
} from '../controllers/imageController.js'
import uploadCloud from '../configs/cloudinary.config.js'
import { khoaAPI } from '../configs/jwt.js'

const imageRoutes = express.Router()

imageRoutes.get('/get-list-image', getListImage)
imageRoutes.get('/search-image/:name', searchImage)
imageRoutes.get('/info-image-user/:imageID', getInfoImageUser)
imageRoutes.get(
  '/info_image_save_imageID/:imageID',
  khoaAPI,
  getinfoImageSaveImageID,
)
imageRoutes.get(
  '/get-list-image-save-by-user/:userID',
  khoaAPI,
  getImageSaveByUser,
)
imageRoutes.get(
  '/get-list-image-create-by-user/:userID',
  khoaAPI,
  getImageCreateByUser,
)
imageRoutes.delete('/delete-image/:imageID', khoaAPI, deleteImage)
imageRoutes.post(
  '/create-image',
  khoaAPI,
  uploadCloud.single('file'),
  createImage,
)

export default imageRoutes
