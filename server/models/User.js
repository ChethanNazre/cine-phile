const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../config/key");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    lastname: {
      type: String,
      maxlength: 50,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: String,
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      id: this._id.toString(),
      role: this.role,
    },
    config.jwtSecret,
    { expiresIn: config.jwtExpiry }
  );

  const oneHour = moment().add(1, "hour").valueOf();

  this.token = token;
  this.tokenExp = oneHour;

  return token;
};

userSchema.statics.findByToken = function (token, cb) {
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return cb(err);

    this.findOne({ _id: decoded.id, token }, (findErr, user) => {
      if (findErr) return cb(findErr);
      cb(null, user);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
