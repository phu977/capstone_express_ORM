import { createToken } from '../configs/jwt.js'
import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'
import bcrypt from 'bcrypt'

const conn = initModels(sequelize)

const login = async (req, res) => {
  try {
    let { email, mat_khau } = req.body

    let data = await conn.nguoi_dung.findOne({
      where: {
        email: email,
      },
    })

    let password = mat_khau

    if (data) {
      let checkPassWord = await bcrypt.compare(password, data.mat_khau)
      if (checkPassWord) {
        let payload = {
          nguoi_dung_id: data.nguoi_dung_id,
        }

        let token = createToken(payload)
        res.status(200).send({
          status: 200,
          message: 'Logged in successfully',
          content: {
            nguoi_dung_id: data.nguoi_dung_id,
            email: data.email,
            ho_ten: data.ho_ten,
            tuoi: data.tuoi,
            anh_dai_dien: data.anh_dai_dien,
            token: token,
          },
        })
      } else {
        res.status(400).send({
          status: 400,
          content: 'Error',
          message: 'Email & Password is incorrect',
        })
      }
    } else {
      res.status(404).send({
        status: 404,
        content: 'Error',
        message: 'Email account does not exist',
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const signUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body
    let data = await conn.nguoi_dung.findOne({
      where: { email: email },
    })
    if (data) {
      res.status(400).send({
        status: 400,
        content: 'Error',
        message: 'Account already exists',
      })
    } else {
      let encodePassword = bcrypt.hashSync(mat_khau, 10)

      // Kiểm tra xem người dùng đã upload ảnh đại diện hay chưa
      if (!anh_dai_dien) {
        // Nếu không có ảnh đại diện, lấy chữ cái đầu và cuối của tên và họ
        const firstNameInitial = ho_ten.split(' ')[0][0].toUpperCase()
        const lastNameInitial = ho_ten.split(' ').slice(-1)[0][0].toUpperCase()
        const initials = `${firstNameInitial}${lastNameInitial}`

        // Bạn có thể sử dụng thêm các thư viện để tạo ảnh từ chữ cái hoặc sử dụng API từ các dịch vụ tạo avatar ngẫu nhiên.
        // Dưới đây là một ví dụ đơn giản tạo ảnh avatar tạm thời từ chữ cái:
        const avatarUrl = `https://ui-avatars.com/api/?name=${initials}&background=random&size=200`

        // Gán ảnh đại diện là URL của avatar tạm thời
        anh_dai_dien = avatarUrl
      }

      let newUser = {
        email: email,
        mat_khau: encodePassword,
        ho_ten,
        tuoi,
        anh_dai_dien,
      }
      await conn.nguoi_dung.create(newUser)
      res
        .status(200)
        .send({ status: 200, message: 'Account successfully created' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export { login, signUp }
