// libaryModel.js
const Club = require('../appModels/Club'); 
const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        },
    author: {
        type: String,
        required: true,
        },
    datePosted: {
        type: Date,
        required: true,
        },
    photo: {
        type: String,
        required: false,
        }, 
    article: {
        type: String,
        required: false,
        },     
    audio: {
        type: String,
        required: false,
        },   
    vedio: {
        type: String,
        required: false,
        },     
   /* fileType: {
        type: String,
        enum: [
          'jpeg',
          'jpg',
          'png',
          'gif',
          'webp',
          'doc',
          'txt',
          'csv',
          'docx',
          'xls',
          'xlsx',
          'pdf',
          'zip',
          'rar',
          'mp4',
          'mov',
          'avi',
          'mp3',
          'm4a',
          'webm',
        ],
        required: true,
    },*/
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
    likes: {
    type: Number,
    default: 0,
    },   
      
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;