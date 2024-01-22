import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'

const conn = initModels(sequelize)

const getImageSaveByUser = async (req, res) => {
  try {
    const { userID } = req.params

    // Lấy thông tin user
    let user = await conn.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: userID,
      },
    })

    // Kiểm tra có userID có trong db không
    if (!user) {
      res.status(404).send({ status: 404, message: 'User not found' })
      return
    }

    let data = await conn.luu_anh.findAll({
      where: {
        nguoi_dung_id: userID,
      },
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const getImageCreateByUser = async (req, res) => {
  try {
    const { userID } = req.params

    // Lấy thông tin user
    let user = await conn.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: userID,
      },
    })

    // Kiểm tra có userID có trong db không
    if (!user) {
      res.status(404).send({ status: 404, message: 'User not found' })
      return
    }

    let data = await conn.hinh_anh.findAll({
      where: {
        nguoi_dung_id: userID,
      },
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message })
  }
}

const deleteImage = async (req, res) => {
  try {
    const { imageID } = req.params
    await conn.hinh_anh.destroy({
      where: {
        hinh_id: imageID,
      },
    })
    res.status(200).send({ status: 200, message: 'Delete success' })
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message })
  }
}

export { getImageSaveByUser, getImageCreateByUser, deleteImage }
