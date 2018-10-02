const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// create a model class named 'User'
const  User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id});

        if (existingUser) {
            // we already have a record with the given profile ID
            return done(null, existingUser);
        }
        // we don't have a record with the given profile ID, make a new record
        // create a new instance of model User
        const user = await new User({ googleId: profile.id}).save();
        done(null, user);
    }
    )
);

