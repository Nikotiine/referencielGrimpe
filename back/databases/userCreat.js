//const e = require("express");
const res = require("express/lib/response");
const { croixCreat } = require("./croixCreat");
const { Sequelize, DataTypes, Models } = require("sequelize");
const sequelize = new Sequelize("grimper", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});

const creatUser = sequelize.define("user", {
  userName: { type: DataTypes.STRING },
  userPass: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  sex: { type: DataTypes.STRING },
  admin: { type: DataTypes.BOOLEAN },
});

async function newUser(userdata) {
  return await creatUser.findOrCreate({
    where: { userName: userdata.userName },
    defaults: userdata,
  });
  /* .then((user) => {
      const [result, created] = user;
      console.log(created);
      if (created === true) {
        res.json({ data: "ok" });
      } else {
        res.json({ data: "pasok" });
      }
    })
    .catch((err) => {});*/
}
async function loginUser(login) {
  return await creatUser.findOne({
    where: {
      userName: login.userName,
      userPass: login.userPass,
    },
  });
}
async function showUser(userId) {
  return await creatUser.findByPk(userId);
}
//creatUser.hasMany(croixCreat);
//croixCreat.belongsTo(creatUser);
module.exports = { creatUser, newUser, loginUser, showUser };
