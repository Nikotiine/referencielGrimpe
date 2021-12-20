const { Sequelize, DataTypes, Models } = require("sequelize");
const sequelize = new Sequelize("grimper", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});
const croixCreat = sequelize.define("croix", {});
