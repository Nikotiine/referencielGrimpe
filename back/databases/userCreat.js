const { user } = require("./models");
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../databases/token");
//const { generateRefreshToken} = require("../databases/token");

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
  const account = await user.findOne({
    where: {
      email: email,
    },
  });

  // check account found and verify password
  if (!account || !bcrypt.compareSync(password, account.password)) {
    // authentication failed

    return false;
  } else {
    // authentication successful
    const accessToken = generateAccessToken({ account });
    const refreshToken = generateRefreshToken({ account });
    return { accessToken, refreshToken };
  }
}
async function showUser(userId) {
  return await user.findByPk(userId);
}
async function verifyToken(req) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }
    // TODO : check en bdd que le user a toujours les droit et qu'il existe toujours
    delete user.iat;
    delete user.exp;
    const refreshedToken = generateAccessToken(user);
    res.send({
      accessToken: refreshedToken,
    });
  });
}
module.exports = { newUser, loginUser, showUser, verifyToken };
