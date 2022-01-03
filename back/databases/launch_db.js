const { database } = require("./config");
const { user } = require("./models");
const { croix } = require("./models");
const { spot } = require("./models");
const { rout } = require("./models");
(async () => {
  try {
    await database.authenticate();
    await croix.sync({ alter: true });
    await user.sync({ alter: true });
    await spot.sync({ alter: true });
    await rout.sync({ alter: true });
    console.log("Connection mariadb ok.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = { database };
