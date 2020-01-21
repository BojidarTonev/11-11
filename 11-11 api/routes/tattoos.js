const controllers = require('../controllers');
const router = require('express').Router();

router.get('/tattoos/all', controllers.tattoos.get.allTattoos)

module.exports = router;
