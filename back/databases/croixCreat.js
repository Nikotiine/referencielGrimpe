const { Sequelize, DataTypes, Models } = require("sequelize");
const { creatUser } = require("./userCreat");
const sequelize = new Sequelize("grimper", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});

const croixCreat = sequelize.define("rout", {
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
  return await croixCreat.findAndCountAll({
    where: {
      userId: id,
    },
  });
}
module.exports = { newCroix, croixCreat, showRout };
