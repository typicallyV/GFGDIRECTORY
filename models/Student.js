const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  className: String,
  phone: String,
  image: String
});

module.exports = mongoose.model('Student', studentSchema);
