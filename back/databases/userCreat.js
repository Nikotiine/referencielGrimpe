//const e = require("express");
const res = require("express/lib/response");
const { Sequelize, DataTypes, Models } = require("sequelize");
const sequelize = new Sequelize("grimper", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});

const creatUser = sequelize.define("user", {
  userName: { type: DataTypes.STRING },
  userPass: { type: DataTypes.STRING },
  admin: { type: DataTypes.BOOLEAN },
});
async function newUser(userdata) {
  return await creatUser.findOrCreate({
    where: { userName: userdata.userName },
    defaults: { userPass: userdata.userPass },
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
module.exports = { creatUser, newUser, loginUser };
