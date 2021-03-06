// add these env variables to Heroku setting page
// prod.js - production keys here!
// GOOGLE PROJECT questionnaire-prod
// GOOGLE_CLIENT_ID: 1061640972929-5kugfd4v8obgptq4fih5ecj4ko2o0m9c.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET: 8qxpHQMzCNEgfyqx3GY2JnU8
// https://intense-hollows-97670.herokuapp.com
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey : process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
};
