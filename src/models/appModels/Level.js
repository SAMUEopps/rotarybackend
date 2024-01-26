const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const Level = mongoose.model('Level', levelSchema);

module.exports = Level;
