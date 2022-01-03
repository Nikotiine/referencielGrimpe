const { DataTypes } = require("sequelize");
const { database } = require("./config");

const user = database.define("users", {
  userName: { type: DataTypes.STRING },
  userPass: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  sex: { type: DataTypes.STRING },
  admin: { type: DataTypes.BOOLEAN },
});

const rout = database.define("rout", {
  name: { type: DataTypes.STRING },
  cotation1: { type: DataTypes.INTEGER },
  cotation2: { type: DataTypes.STRING },
  profil: { type: DataTypes.STRING },
  degaines: { type: DataTypes.INTEGER },
  effort: { type: DataTypes.STRING },
  height: { type: DataTypes.INTEGER },
  equipement: { type: DataTypes.STRING },
});

const spot = database.define("spot", {
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
const croix = database.define("croix", {
  date: { type: DataTypes.DATEONLY },
  realisation: { type: DataTypes.STRING },
  essai: { type: DataTypes.INTEGER },
  post: { type: DataTypes.STRING },
  like: { type: DataTypes.BOOLEAN },
});
spot.hasMany(rout, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
rout.belongsTo(spot);

user.belongsToMany(rout, {
  through: croix,
});

rout.belongsToMany(user, {
  through: croix,
});

module.exports = { spot, rout, user, croix };
