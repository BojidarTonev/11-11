const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 8000,
        dbURL: 'mongodb://localhost:27017/11-11',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];