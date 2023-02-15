var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controller/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.post('/trainers/:id/reviews', reviewsCtrl.create);

router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);




module.exports = router;