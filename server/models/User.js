const mongoose = require('mongoose');
const { Schema } = mongoose;

// define a schema
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0}
});

// create a model named "users", which equals a collection MongoDB
// with scheme "userSchema"
mongoose.model('users', userSchema);