import { createToken } from "../configs/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import bcrypt from "bcrypt";

const conn = initModels(sequelize);
const login = async (req, res) => {
  try {
    let { email, mat_khau } = req.body;

    let data = await conn.nguoi_dung.findOne({
      where: {
        email: email,
      },
    });
    let password = mat_khau;

    if (data) {
      let checkPassWord = bcrypt.compareSync(mat_khau, data.mat_khau);

      if (checkPassWord) {
        let payload = {
          nguoi_dung_id: data.nguoi_dung_id,
        };

        let token = createToken(payload);
        res.status(200).send({
          status: 200,
          message: "valid account",
          data: data,
          token: token,
        });
      }
    } else {
      res.status(404).send("tài khoản không hợp lệ ");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
    let data = await conn.nguoi_dung.findOne({
      where: { email: email },
    });
    if (data) {
      res.status(400).send({ status: 400, message: "Account already exists" });
    } else {
      let encodePassword = bcrypt.hashSync(mat_khau, 10);
      let newUser = {
        email: email,
        mat_khau: encodePassword,
        ho_ten,
        tuoi,
        anh_dai_dien,
      };
      await conn.nguoi_dung.create(newUser);
      res.status(200).send({ status: 200, message: "create user success" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export { login, signUp };
