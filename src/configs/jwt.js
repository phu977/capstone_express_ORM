import jwt from "jsonwebtoken";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const conn = initModels(sequelize);

const createToken = (data) => {
  return jwt.sign(data, "NODE38", { expiresIn: "1y" });
};

export { createToken };
