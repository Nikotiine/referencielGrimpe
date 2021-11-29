const { Sequelize, DataTypes, Models } = require("sequelize");
const sequelize = new Sequelize("grimper", "root", "niko38freeedom", {
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
  positionPark: { type: DataTypes.GEOGRAPHY },
  positionSQuatt: { type: DataTypes.GEOGRAPHY },
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

module.exports = { newSpot };

(async () => {
  try {
    await sequelize.authenticate();
    await dataSite.sync({ alter: true });
    console.log("Connection mariadb ok.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
