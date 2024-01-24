import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'
import bcrypt from 'bcrypt'

const conn = initModels(sequelize)

const getUser = async (req, res) => {
  try {
    let data = await conn.nguoi_dung.findAll({
      attributes: {
        exclude: ['mat_khau'],
      },
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { userID } = req.params
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body

    let user = await conn.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: userID,
      },
    })

    if (!user) {
      res.status(404).send({ status: 404, message: 'User not found' })
      return
    }

    let encodePassword = bcrypt.hashSync(mat_khau, 10)

    let updateData = {
      email,
      mat_khau: encodePassword,
      ho_ten,
      tuoi,
      anh_dai_dien: req.file ? req.file.path : user.anh_dai_dien,
    }

    await conn.nguoi_dung.update(updateData, {
      where: {
        nguoi_dung_id: userID,
      },
      data: updateData,
    })
    res.status(200).send({ status: 200, message: 'Update user successfully' })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export { getUser, updateUser }
