import { Sequelize } from "sequelize";
import dbConfig from "../configs/db.config.js";

let { dbHost, dbUser, dbPass, dbPort, dbDialect, dbName } = dbConfig;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: dbDialect,
  port: dbPort,
});

export default sequelize;
//npx sequelize-auto -h localhost -d capstone_pinterest -u root -x 1234 -p 3307 --dialect mysql -o src/models
