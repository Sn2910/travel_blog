const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  passwordHash: String,
  confirmPasswordHash: String,
});

module.exports = mongoose.model("VerifiedUser", userSchema);
