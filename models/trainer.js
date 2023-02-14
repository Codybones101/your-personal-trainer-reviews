const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
      type: String,
      required: true,
    }, 
    content: {
      type: String,
      required: true,
    }, 
}); 

const trainerSchema = new Schema({
  name: String,
  location: String,
  description: String,
  userTrainer: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  }, 
  userName: String,
  userAvatar: String,
  reviews: [reviewSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('trainer', trainerSchema);