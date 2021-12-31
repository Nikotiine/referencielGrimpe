const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
// configuration choice
const CONFIG_NAME = "dev";
const current_configuration = config[CONFIG_NAME];

const database = new Sequelize(
  current_configuration.database,
  current_configuration.username,
  current_configuration.password,
  {
    host: current_configuration.host,
    dialect: current_configuration.dialect,
  }
);

module.exports = { database };
