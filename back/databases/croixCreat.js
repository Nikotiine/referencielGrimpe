const { Sequelize, DataTypes, Models } = require("sequelize");
const sequelize = new Sequelize("grimper", "root", "root", {
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
