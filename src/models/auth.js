const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, //girilmesi zorunlu
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Auth', AuthSchema);
