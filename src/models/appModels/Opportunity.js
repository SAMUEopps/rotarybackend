// opportunityModel.js
const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  nameOfCompany: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  tags: {
    type: [String], 
    required: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
  photo: {
    type: String,
    required: false,
    trim: true,
  },
  socials: {
    type: [String],
    required: false,
  },
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;