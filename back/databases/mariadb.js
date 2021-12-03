const { Sequelize, DataTypes, Models } = require("sequelize");
const sequelize = new Sequelize("grimper", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});
const dataSite = sequelize.define("climbingSpot", {
  spotName: { type: DataTypes.STRING },
  heightRout: { type: DataTypes.INTEGER },
  approchTime: { type: DataTypes.INTEGER },
  approchType: { type: DataTypes.STRING },
  equipment: { type: DataTypes.STRING },
  nearHome: { type: DataTypes.STRING },
  positionPark: { type: DataTypes.GEOMETRY },
  positionSQuatt: { type: DataTypes.GEOMETRY },
  hiver: { type: DataTypes.BOOLEAN },
  printemps: { type: DataTypes.BOOLEAN },
  ete: { type: DataTypes.BOOLEAN },
  automne: { type: DataTypes.BOOLEAN },
  commodite: { type: DataTypes.BOOLEAN },
  resau: { type: DataTypes.BOOLEAN },
  eauPasLoin: { type: DataTypes.BOOLEAN },
  freshWater: { type: DataTypes.BOOLEAN },
  nord: { type: DataTypes.BOOLEAN },
  sud: { type: DataTypes.BOOLEAN },
  est: { type: DataTypes.BOOLEAN },
  ouest: { type: DataTypes.BOOLEAN },
});

async function newSpot(name) {
  await dataSite.create(name);
}

//module.exports = { newSpot };
/*async function siteDispo() {
  await dataSite.findAll({});
}*/
async function siteDispo() {
  return await dataSite.findAll();
}
async function showIndex(id) {
  return await dataSite.findByPk(id);
}
async function delelteSite(ni) {
  return await dataSite.destroy({ where: { id: ni } });
}
async function modifSite(body, spotid) {
  return await dataSite.update(body, { where: { id: spotid } });
}
module.exports = { siteDispo, newSpot, showIndex, delelteSite, modifSite };

(async () => {
  try {
    await sequelize.authenticate();
    await dataSite.sync({ alter: true });
    console.log("Connection mariadb ok.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
