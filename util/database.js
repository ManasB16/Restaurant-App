const Sequelize = require("sequelize");

const sequelize = new Sequelize("restaurant", "root", "MySql1600", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
