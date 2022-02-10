const { DataTypes } = require("sequelize");
const { database } = require("./config");

const user = database.define("users", {
  nickName: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  admin: { type: DataTypes.BOOLEAN },
  avatar: { type: DataTypes.BLOB("long") },
});

// const rout = database.define("rout", {
//   name: { type: DataTypes.STRING },
//   secteur: { type: DataTypes.STRING },
//   cotation: { type: DataTypes.STRING },
//   profil: { type: DataTypes.STRING },
//   degaines: { type: DataTypes.INTEGER },
//   bloc: { type: DataTypes.BOOLEAN },
//   conti: { type: DataTypes.BOOLEAN },
//   resi: { type: DataTypes.BOOLEAN },
//   height: { type: DataTypes.INTEGER },
//   equipement: { type: DataTypes.STRING },
// });

const spot = database.define("spot", {
  name: { type: DataTypes.STRING },
  exposition: { type: DataTypes.STRING },
  hauteurMax: { type: DataTypes.STRING },
  tempsApproche: { type: DataTypes.STRING },
  typeApproche: { type: DataTypes.STRING },
  nombreLignes: { type: DataTypes.STRING },
  niveauMini: { type: DataTypes.STRING },
  hiver: { type: DataTypes.BOOLEAN },
  printemps: { type: DataTypes.BOOLEAN },
  ete: { type: DataTypes.BOOLEAN },
  automne: { type: DataTypes.BOOLEAN },
  rockType: { type: DataTypes.STRING },
  positionParking: { type: DataTypes.GEOMETRY },
  positionParkingCamion: { type: DataTypes.GEOMETRY },
  secteur: { type: DataTypes.BOOLEAN },
  region: { type: DataTypes.INTEGER },
  departement: { type: DataTypes.INTEGER },
  parking: { type: DataTypes.BOOLEAN },
});
// const confortParking = database.define("confortParking", {
//   toilettes: { type: DataTypes.BOOLEAN },
//   resau: { type: DataTypes.BOOLEAN },
//   riviereLac: { type: DataTypes.BOOLEAN },
//   eauPotable: { type: DataTypes.BOOLEAN },
// });

const secteurSpots = database.define("secteur", {
  ref: { type: DataTypes.INTEGER },
  name: { type: DataTypes.TEXT },
});

// const equipement = database.define("equipement", {
//   normal: { type: DataTypes.BOOLEAN },
//   engage: { type: DataTypes.BOOLEAN },
//   expose: { type: DataTypes.BOOLEAN },
//   rapproche: { type: DataTypes.BOOLEAN },
// });
// const typeVoie = database.define("typeVoie", {
//   vertical: { type: DataTypes.BOOLEAN },
//   dalle: { type: DataTypes.BOOLEAN },
//   devers: { type: DataTypes.BOOLEAN },
//   surplomb: { type: DataTypes.BOOLEAN },
// });
// const croix = database.define("croix", {
//   date: { type: DataTypes.DATEONLY },
//   flash: { type: DataTypes.BOOLEAN },
//   aVue: { type: DataTypes.BOOLEAN },
//   travail: { type: DataTypes.BOOLEAN },
//   projet: { type: DataTypes.BOOLEAN },
//   essais: { type: DataTypes.INTEGER },
//   post: { type: DataTypes.STRING },
//   like: { type: DataTypes.BOOLEAN },
// });
// spot.hasMany(rout, {
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE",
// });
// rout.belongsTo(spot);
spot.hasMany(secteurSpots, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
secteurSpots.belongsTo(spot);
// spot.hasMany(typeVoie, {
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE",
// });
// typeVoie.belongsTo(spot);
// spot.hasMany(equipement, {
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE",
// });
// equipement.belongsTo(spot);
// spot.hasMany(saison, {
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE",
// });
// saison.belongsTo(spot);
// spot.hasMany(confortParking, {
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE",
// });
// confortParking.belongsTo(spot);

// user.belongsToMany(rout, {
//   through: croix,
// });

// rout.belongsToMany(user, {
//   through: croix,
// });

module.exports = { user, spot, secteurSpots };
