const Club = require('../appModels/Club'); 
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
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
    trim: true,
    required: true,
  },
  type: {
    type: String,
    required: false,
    enum: ['physical', 'hybrid', 'online'], 
  },
  date: {
    type: Date,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  amount: {
    type: String,
    required: false,
  },
  dressCode: {
    type: [String],
    required: false,
  },
  eventDetails: {
    type: String,
    required: false,
  },
  eventLocation: {
    type: String, 
    required: false,
  },
  eventTags: {
    type: [String], 
    required: false,
  },
  eventLikes: {
    type: Number,
    required: false,
  },
  /*eventContacts: [
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
  ],*/
});

module.exports = mongoose.model('Event', eventSchema);