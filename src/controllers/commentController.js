import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'

const conn = initModels(sequelize)

const createComment = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung } = req.body

    // Kiểm tra người dùng có tồn tại hay không
    let user = await conn.nguoi_dung.findOne({
      where: { nguoi_dung_id },
    })
    console.log('user:', user)

    if (!user) {
      res.status(404).send({ message: 'User not found' })
      return
    }

    // // Kiểm tra hình có tồn tại hay không
    let image = await conn.hinh_anh.findOne({
      where: { hinh_id },
    })

    if (!image) {
      res.status(404).send({ message: 'Image not found' })
      return
    }

    // Tạo comment
    let commentData = {
      nguoi_dung_id,
      hinh_id,
      ngay_binh_luan: new Date(),
      noi_dung,
    }
    await conn.binh_luan.create(commentData)
    res.status(200).send({ message: 'Create comment successfully' })
  } catch (error) {
    res.status(500).send('error: ' + error)
  }
}

export { createComment }
