const { creatUser } = require("./models");

async function newUser(userdata) {
  return await creatUser.findOrCreate({
    where: { userName: userdata.userName },
    defaults: userdata,
  });
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

module.exports = { newUser, loginUser, showUser };
