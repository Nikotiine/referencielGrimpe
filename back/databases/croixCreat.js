const { croix } = require("./models");

async function newCroix(dataNewCroix) {
  return await croix.findOrCreate({
    where: { routId: dataNewCroix.routId, userId: dataNewCroix.userId },
    defaults: dataNewCroix,
  });
}

module.exports = { newCroix };
