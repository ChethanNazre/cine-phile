const User = require("../models/User");

const auth = (req, res, next) => {
  const token = req.cookies.w_auth;

  if (!token) {
    return res.status(401).json({ isAuth: false, error: true });
  }

  User.findByToken(token, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ isAuth: false, error: true });
    }

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
