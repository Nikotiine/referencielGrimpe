const { croixCreat } = require("./models");

async function newCroix(croixdata) {
  return await croixCreat.findOrCreate({
    where: { routName: croixdata.routName },
    defaults: croixdata,
  });
}
async function showRout(id) {
  return await croixCreat.count({
    where: {
      userId: id,
    },
  });
}
async function getRout(userid) {
  return await croixCreat.findAll({
    include: "spot",

    where: { userId: userid },
  });
}
module.exports = { newCroix, showRout, getRout };
