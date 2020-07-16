const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const KoanSchema = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = Koan = mongoose.model('koan', KoanSchema, 'Koans');
