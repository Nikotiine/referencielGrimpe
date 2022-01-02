const { dataSite } = require("./models");

async function newSpot(dataNewSpot) {
  return await dataSite.findOrCreate({
    where: { spotName: dataNewSpot.spotName },
    default: dataNewSpot,
  });
}

async function showTable() {
  return await dataSite.findAll();
}
async function showOneSpot(pk) {
  return await dataSite.findByPk(pk);
}
async function delSpot(id) {
  return await dataSite.destroy({ where: { id: id } });
}
async function editSite(body, spotid) {
  return await dataSite.update(body, { where: { id: spotid } });
}

module.exports = {
  showTable,
  newSpot,
  showOneSpot,
  delSpot,
  editSite,
};
