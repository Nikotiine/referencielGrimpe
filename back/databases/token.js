const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

require("dotenv").config();

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1y",
  });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token);
  if (token === null) return res.status(401).send("pas de token");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(token);
      console.log("err");
      return res.status(401).send("token incorrect");
    }
    console.log("ca marche");
    req.user = user;
    next();
  });
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
    console.log("verify ok");
    delete user.iat;
    delete user.exp;
    const refreshedToken = generateAccessToken(user);
    return {
      accessToken: refreshedToken,
    };
  });
}

module.exports = {
  generateAccessToken,
  authenticateToken,
  generateRefreshToken,
  verifyToken,
};
