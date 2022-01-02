const { routCreat } = require("./models");

async function newRout(croixdata) {
  return await routCreat.findOrCreate({
    where: { routName: croixdata.routName },
    defaults: croixdata,
  });
}
async function showRout(id) {
  return await routCreat.count({
    where: {
      userId: id,
    },
  });
}
async function getRout(userid) {
  return await routCreat.findAll({
    include: "spot",

    where: { userId: userid },
  });
}
module.exports = { newRout, showRout, getRout };
