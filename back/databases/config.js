const { Sequelize } = require("sequelize");
const config = require("../config/config.json");

// configuration choice
const CONFIG_NAME = "vue";
const currentConfiguration = config[CONFIG_NAME];

const database = new Sequelize(
  currentConfiguration.database,
  currentConfiguration.username,
  currentConfiguration.password,
  {
    host: currentConfiguration.host,
    dialect: currentConfiguration.dialect,
  }
);

module.exports = { database };
