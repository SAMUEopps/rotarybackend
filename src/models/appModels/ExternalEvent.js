const mongoose = require('mongoose');

const externalEventSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
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
  photo: {
    type: String,
    required: false,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['physical', 'hybrid', 'online'], 
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  dressCode: {
    type: [String],
    required: false,
  },
  eventDetails: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String, 
    required: true,
  },
  eventTags: {
    type: [String], 
    required: true,
  },
  eventLikes: {
    type: Number,
    required: true,
  },
  eventContacts: [
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

module.exports = mongoose.model('ExternalEvent', externalEventSchema);