var mongoose = require('mongoose');

// Create the GoalSchema.
var GoalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  opponent: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('goal', GoalSchema);
