module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/cine-phile",
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-me",
  jwtExpiry: process.env.JWT_EXPIRY || "1h",
};
