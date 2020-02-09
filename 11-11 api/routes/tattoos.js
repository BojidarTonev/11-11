const controllers = require('../controllers');
const router = require('express').Router();

router.get('/tattoos/all', controllers.tattoos.get.allTattoos)
router.get('/tattoos/:style', controllers.tattoos.get.tatoosFromStyle)

module.exports = router;
