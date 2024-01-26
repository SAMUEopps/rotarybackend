// publicationModel.js
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  file: {
    type: String, 
    required: true,
  },
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;