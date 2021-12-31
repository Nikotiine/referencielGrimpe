const { database } = require("./config");
const { creatUser } = require("./models");
const { croixCreat } = require("./models");
const { dataSite } = require("./models");

(async () => {
  try {
    await database.authenticate();
    await croixCreat.sync({ alter: true });
    await creatUser.sync({ alter: true });
    await dataSite.sync({ alter: true });
    console.log("Connection mariadb ok.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = { database };
