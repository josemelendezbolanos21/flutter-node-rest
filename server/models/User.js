const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String, required: true },
});

module.exports = model('users', userSchema);