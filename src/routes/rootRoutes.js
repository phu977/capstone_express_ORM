import express from 'express'
import userRoutes from './userRoutes.js'
import commentRoutes from './commentRoutes.js'

const rootRoutes = express.Router()

rootRoutes.use('/user', userRoutes)
rootRoutes.use('/comment', commentRoutes)

export default rootRoutes
