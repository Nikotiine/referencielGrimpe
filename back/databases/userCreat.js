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
  creatUser
    .findOrCreate({
      where: { userName: userdata.userName, userPass: userdata.userPass },
    })
    .then((res) => res.send(res))
    .catch((err) => res.send(err));
}
module.exports = { creatUser, newUser };
