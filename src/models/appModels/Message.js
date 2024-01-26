// publicationModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: Date,
    required: true,
  },
  emailAddress: {
    type: String, 
    required: true,
  },
  subject: {
    type: String, 
    required: true,
  },
  message: {
    type: String, 
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;