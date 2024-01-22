import express from 'express'
import { getImageSaveByUser, getImageCreateByUser, deleteImage } from '../controllers/imageController.js'

const imageRoutes = express.Router()

imageRoutes.get('/get-list-image-save-by-user/:userID', getImageSaveByUser)
imageRoutes.get('/get-list-image-create-by-user/:userID', getImageCreateByUser)
imageRoutes.delete('/delete-image/:imageID', deleteImage)

export default imageRoutes
