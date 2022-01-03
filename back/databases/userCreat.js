const { user } = require("./models");

async function newUser(userData) {
  return await user.findOrCreate({
    where: { userName: userData.userName },
    defaults: userData,
  });
}
async function loginUser(login) {
  return await user.findOne({
    where: {
      userName: login.userName,
      userPass: login.userPass,
    },
  });
}
async function showUser(userId) {
  return await user.findByPk(userId);
}

module.exports = { newUser, loginUser, showUser };
