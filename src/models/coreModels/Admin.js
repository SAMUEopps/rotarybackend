/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  branchs: [{ type: mongoose.Schema.ObjectId, ref: 'Branch' }],
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: { type: String, required: true, lowercase: true },
  surname: { type: String, lowercase: true },
  photo: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'staff',
    enum: ['superadmin', 'admin', 'staffAdmin', 'staff', 'createOnly', 'readOnly'],
  },
});

module.exports = mongoose.model('Admin', adminSchema);*/

const Interest = require('../appModels/Interest'); 
const Level = require('../appModels/Level'); 
const Club = require('../appModels/Club'); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  level: {
    type: String,
    required: false,
    validate: {
      validator: async function (value) {
        if (value === "") {
          return true;
        }
        const levelExists = await Level.exists({ name: value });
        return levelExists;
      },
      message: props => `${props.value} is not a valid level.`,
    },
  },
   interest: {
    type: String,
    required: false,
    validate: {
      validator: async function (value) {
        if (value === "") {
          return true;
        }
        const interestExists = await Interest.exists({ name: value });
        return interestExists;
      },
      message: props => `${props.value} is not a valid interest.`,
    },
  },
  
  name: { type: String, required: false, lowercase: true },
  phone: { type: String, required: false, unique: false },
  userName: { type: String, required: false, lowercase: true },
  surname: { type: String, lowercase: false },
  photo: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'staff',
    enum: ['superadmin', 'admin', 'staffAdmin', 'staff', 'createOnly', 'readOnly'],
  },
  isLoggedIn: { type: Number },
  loggedSessions: {
    type: [String],
    default: [],
  },
  education: {
    type: String,
    required: false,
  },
  memberCode: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
 profession: {
    type: String,
    required: false,
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
  region: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Admin', adminSchema);