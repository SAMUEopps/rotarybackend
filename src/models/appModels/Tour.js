// publicationModel.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      datePosted: {
        type: Date,
        required: true,
      },
      photo: {
        type: String, 
        required: true,
      },
      description: {
        type: String, 
        required: true,
      },
      host: {
        type: String, 
        required: true,
      },
     tags: {
        type: [String],
        required: true,
      },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;