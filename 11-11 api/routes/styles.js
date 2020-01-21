const controllers = require('../controllers');
const router = require('express').Router();

router.get('/styles/all', controllers.styles.get.allStyles)

module.exports = router;
