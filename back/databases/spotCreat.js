const { spot, secteurSpots } = require("./models");

async function newSpot(data) {
  const [spotData, created] = await spot.findOrCreate({
    where: { name: data.name },
    defaults: {
      exposition: data.exposition,
      hauteurMax: data.hauteurMax,
      tempsApproche: data.tempsApproche,
      typeApproche: data.typeApproche,
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
async function findAndCountAllSpot() {
  console.log("compte");
  return await spot.findAndCountAll();
}

async function findOneSpot(pk) {
  return await spot.findOne({
    where: {
      id: pk,
    },
    include: secteurSpots,
  });
}

async function delSpot(id) {
  return await spot.destroy({ where: { id: id } });
}
async function editSpot(body, spotid) {
  return await spot.update(body, { where: { id: spotid } });
}

module.exports = {
  newSpot,
  findOneSpot,
  delSpot,
  editSpot,
  findAndCountAllSpot,
};
