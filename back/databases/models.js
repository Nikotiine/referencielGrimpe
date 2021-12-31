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

const croixCreat = database.define("croix", {
  routName: { type: DataTypes.STRING },
  routCotation1: { type: DataTypes.INTEGER },
  routCotation2: { type: DataTypes.STRING },
  routProfil: { type: DataTypes.STRING },
  realisation: { type: DataTypes.STRING },
  essai: { type: DataTypes.INTEGER },
  degaines: { type: DataTypes.INTEGER },
  effort: { type: DataTypes.STRING },
  routHeight: { type: DataTypes.INTEGER },
  commentaires: { type: DataTypes.STRING },
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
});

dataSite.hasMany(croixCreat, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
croixCreat.belongsTo(dataSite);
creatUser.hasMany(croixCreat, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
croixCreat.belongsTo(creatUser);

module.exports = { dataSite, croixCreat, creatUser };
