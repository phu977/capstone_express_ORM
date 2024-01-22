import express from 'express'
import cors from 'cors'
import rootRoutes from './src/routes/rootRoutes.js'

const app = express()
const port = 8080

app.use(express.json()) // middleware parse body string -> body json
app.use(express.static('.')) // middleware để xác định nơi lưu file, public file
app.use(cors()) // cho tất cả các request (FE) từ bên ngoài vào để tương tác vs BE

app.use('/api', rootRoutes)

app.listen(port)
