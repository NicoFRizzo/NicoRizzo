const mongoose = require('mongoose');

const logIntSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('accounts', logIntSchema);
