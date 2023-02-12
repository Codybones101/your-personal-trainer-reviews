const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: Number,
    content: String,
}); 

const trainerSchema = new Schema({
  name: String,
  location: String,
  email: String,
  avatar: String,
  reviews: [reviewSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('trainer', trainerSchema);