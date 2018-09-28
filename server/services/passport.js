const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// create a model class named 'User'
const  User = mongoose.model('users');

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id})
            .then(existingUser => {
                if (existingUser) {
                    // we already have a record with the given profile ID
                    done(null, existingUser);
                } else {
                    // we don't have a record with the given profile ID, make a new record
                    // create a new instance of model User
                    new User({ googleId: profile.id})
                        .save()
                        .then(user => done(null, user));
                }
            });
    }
    )
);

