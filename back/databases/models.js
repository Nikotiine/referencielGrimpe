const { DataTypes } = require("sequelize");
const { database } = require("./config");

const creatUser = database.define("users", {
  userName: { type: DataTypes.STRING },
  userPass: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  sex: { type: DataTypes.STRING },
  admin: { type: DataTypes.BOOLEAN },
});

const routCreat = database.define("rout", {
  name: { type: DataTypes.STRING },
  cotation1: { type: DataTypes.INTEGER },
  cotation2: { type: DataTypes.STRING },
  profil: { type: DataTypes.STRING },
  degaines: { type: DataTypes.INTEGER },
  effort: { type: DataTypes.STRING },
  height: { type: DataTypes.INTEGER },
  equipement: { type: DataTypes.STRING },
});

const dataSite = database.define("spot", {
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
  niveau: { type: DataTypes.STRING },
  tailleSite: { type: DataTypes.STRING },
  rockType: { type: DataTypes.STRING },
});
const croixCreat = database.define("croix", {});
dataSite.hasMany(routCreat, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
routCreat.belongsTo(dataSite);
creatUser.hasMany(croixCreat, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
croixCreat.belongsTo(creatUser);

module.exports = { dataSite, routCreat, creatUser };
