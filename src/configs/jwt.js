import jwt from 'jsonwebtoken'
import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'

const conn = initModels(sequelize)

const createToken = (data) => {
  return jwt.sign(data, 'NODE38', { expiresIn: '5y' })
}

const checkToken = (token) => {
  return jwt.verify(token, 'NODE38', (err, decoded) => {
    if (err) {
      return {
        statusCode: 401, // 401: Unauthorized
        message: 'Token is invalid',
      }
    }
    return {
      statusCode: 200,
      data: decoded,
    }
  })
}

const khoaAPI = async (req, res, next) => {
  let { token } = req.headers
  if (token) {
    let verifyToken = checkToken(token)
    if (verifyToken.statusCode == 401) {
      res.status(401).send('Token is invalid')
      return
    }
    let { nguoi_dung_id } = verifyToken.data
    let checkUser = await conn.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: nguoi_dung_id,
      },
    })

    if (!checkUser) {
      res.status(401).send('Token is invalid')
      return
    }
    next()
  } else {
    res.status(401).send('Unauthorized')
    return
  }
}

export { createToken, checkToken, khoaAPI }
