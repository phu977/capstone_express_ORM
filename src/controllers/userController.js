import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'

const conn = initModels(sequelize)

const getUser = async (req, res) => {
  try {
    let data = await conn.nguoi_dung.findAll()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

export { getUser }
