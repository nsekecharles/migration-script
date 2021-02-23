const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.APP_PORT,
  mongodbConfig: {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    host: process.env.MONGODB_HOST
  },
  mysqlConfig: {
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE
  }
};