const { spot } = require("./models");

async function newSpot(data) {
  return await spot.findOrCreate({
    where: { spotName: data.spotName },
    defaults: data,
  });
}

async function showTable() {
  return await spot.findAll();
}
async function showOneSpot(pk) {
  return await spot.findByPk(pk);
}
async function delSpot(id) {
  return await spot.destroy({ where: { id: id } });
}
async function editSite(body, spotid) {
  return await spot.update(body, { where: { id: spotid } });
}

module.exports = {
  showTable,
  newSpot,
  showOneSpot,
  delSpot,
  editSite,
};
