import express from 'express'
import { getUser, updateUser } from '../controllers/userController.js'
import uploadCloud from '../configs/cloudinary.config.js'
import { khoaAPI } from '../configs/jwt.js'

const userRoutes = express.Router()

userRoutes.get('/get-user', khoaAPI, getUser)
userRoutes.put(
  '/update-user/:userID',
  khoaAPI,
  uploadCloud.single('avatar'),
  updateUser,
)

export default userRoutes
