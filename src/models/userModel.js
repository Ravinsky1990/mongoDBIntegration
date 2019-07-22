const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    trim: true,
  },
  userName: {
    type: String,
    minlength: 2,
    trim: true,
  },
  email: {
    type: String,
  },
  country: {
    type: String,
    minlength: 2,
    trim: true,
  },
  city: {
    type: String,
    minlength: 2,
    trim: true,
  },
  mobileFone: {
    type: String,
    minlength: 6,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    enum: ['Mr', 'Ms'],
  },
  dailyRate: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
