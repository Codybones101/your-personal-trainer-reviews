var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controller/reviews');

/* GET users listing. */
router.post('/trainers/:id/reviews', reviewsCtrl.create);




module.exports = router;