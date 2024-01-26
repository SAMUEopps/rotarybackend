// projectModel.js
const Club = require('../appModels/Club'); 
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: false,
    validate: {
      validator: async function (value) {
        if (value === "") {
          return true;
        }
        const clubExists = await Club.exists({ name: value });
        return clubExists;
      },
      message: props => `${props.value} is not a valid club.`,
    },
  },
  photo: {
    type: String,
    required: false,
    trim: true,
  },
  projectAmount: {
    type: Number,
    required: true,
  },
  projectAccumulatedAmount: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  projectObjectives: {
    type: String,
    required: true,
  },
  projectTimeline: {
    type: String,
    required: true,
  },
  projectLocation: {
    type: String, 
    required: true,
  },
  projectTags: {
    type: [String], 
    required: true,
  },
  projectContacts: [
    {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;