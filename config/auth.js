module.exports = {
    facebookAuth: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackUrl: 'http://localhost:3000/auth/facebook/callback'
    }
};