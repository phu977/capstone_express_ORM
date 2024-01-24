import express from 'express'
import { getUser, updateUser } from '../controllers/userController.js'
import uploadCloud from '../configs/cloudinary.config.js'

const userRoutes = express.Router()

userRoutes.get('/get-user', getUser)
userRoutes.put('/update-user/:userID', uploadCloud.single('avatar'), updateUser)

export default userRoutes
