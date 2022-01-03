const { rout } = require("./models");

async function newRout(routdata) {
  return await rout.findOrCreate({
    where: { name: routdata.name },
    defaults: routdata,
  });
}
async function showAllRout() {
  return await rout.findAll();
}
/*async function showRout(id) {
  return await rout.count({
    where: {
      userId: id,
    },
  });
}
async function getRout(userid) {
  return await rout.findAll({
    include: "spot",

    where: { userId: userid },
  });
}*/
module.exports = { newRout, showAllRout };
