const router = require('../routes/');
const config = require('../config/config');

module.exports = (app) => {
    app.use('/', router.books);
    app.use('/', router.styles);
    app.use('/', router.tattoos);
    app.use('*', (req, res, next) => res.send('<h1>Something went wrong. Try again! :thumbsup: </h1>'))
}