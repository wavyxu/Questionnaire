const express = require('express');
//require('./services/passport');
////const authRoutes = require('./routes/authRoutes');
//
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
// app.get('/', (req, res) => {
//     res. send({hi : 'there'});
// });

//authRoutes(app);
///require('./routes/authRoutes')(app);

// client id = 999855253190-297696k78gpthkbsuevukp4o64klu9lc.apps.googleusercontent.com
// key = uSIsqQj_Jnkd2kUYz4GcTIwj

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    }
    )
);

app.get('/auth/google',
    passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

 app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;

app.listen(PORT);
// app.listen(5000);