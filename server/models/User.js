const mongoose = require('mongoose');
const { Schema } = mongoose;

// define a schema
const userSchema = new Schema({
    googleId: String
});

// create a model named "users", which equals a collection MongoDB
// with scheme "userSchema"
mongoose.model('users', userSchema);