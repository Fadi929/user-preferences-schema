// Import mongoose
const mongoose = require("mongoose");

// Define the User Preferences Schema
const userPreferencesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate usernames
    trim: true // removes extra spaces
  },
  preferences: {
    type: {
      theme: {
        type: String,
        enum: ['light', 'dark'], // only allow these two values
        default: 'light'
      },
      language: {
        type: String,
        default: 'en'
      },
      notifications: {
        type: {
          email: {
            type: Boolean,
            default: true
          },
          sms: {
            type: Boolean,
            default: false
          }
        },
        default: {} // ensures notifications object exists by default
      }
    },
    required: true,
    default: {} // ensures preferences object exists by default
  }
});

// Compile schema into a model
const UserPreferences = mongoose.model("UserPreferences", userPreferencesSchema);

// Export the model
module.exports = UserPreferences;
