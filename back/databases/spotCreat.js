const { spot, secteurSpots } = require("./models");

async function newSpot(data) {
  console.log(data.secteurs);

  const [spotData, created] = await spot.findOrCreate({
    where: { name: data.name },
    defaults: {
      exposition: data.exposition,
      hauteurMax: data.hauteurMax,
      tempsApproche: data.tempsApproche,
      typeApproche: data.tempsApproche,
      nombreLignes: data.nombreLignes,
      niveauMini: data.niveauMini,
      hiver: data.hiver,
      ete: data.ete,
      printemps: data.printemps,
      automne: data.automne,
      rockType: data.rockType,
      secteur: data.secteur,
      region: data.region,
      departement: data.departement,
      positionParking: data.positionParking,
      positionParkingCamion: data.positionParkingCamion,
    },
  });

  if (created === true) {
    console.log(" site enregistre");

    if (spotData.secteur === true) {
      data.secteurs.forEach((secteur) => {
        const fkey = { spotId: spotData.id };
        Object.assign(secteur, fkey);
      });
      console.log(data.secteurs);
      await secteurSpots.bulkCreate(data.secteurs);
      console.log("apres bulk");
    }

    return { spotData };
  } else return false;
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
