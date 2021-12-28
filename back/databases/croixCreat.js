const { Sequelize, DataTypes, Models } = require("sequelize");
const { creatUser } = require("./userCreat");
const { dataSite } = require("./mariadb");

const sequelize = new Sequelize("grimpniko", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});

const croixCreat = sequelize.define("croix", {
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

async function newCroix(croixdata) {
  return await croixCreat.findOrCreate({
    where: { routName: croixdata.routName },
    defaults: croixdata,
  });
}
async function showRout(id) {
  return await croixCreat.count({
    where: {
      userId: id,
    },
  });
}
async function getRout(userid) {
  return await croixCreat.findAll({
    include: "spot",

    where: { userId: userid },
  });
}
module.exports = { newCroix, croixCreat, showRout, getRout };
