const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;