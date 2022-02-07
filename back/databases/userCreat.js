const { user } = require("./models");
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");

async function newUser(userData) {
  bcrypt.hash(userData.password, 10).then((hash) =>
    user.create({
      nickName: userData.nickName,
      password: hash,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      avatar: userData.avatar,
    })
  );
}
async function loginUser({ email, password }) {
  // get account from database
  const account = await user.findOne({ email });

  // check account found and verify password
  if (!account || !bcrypt.compareSync(password, account.password)) {
    // authentication failed
    return false;
  } else {
    // authentication successful
    return true;
  }
}
async function showUser(userId) {
  return await user.findByPk(userId);
}

module.exports = { newUser, loginUser, showUser };
