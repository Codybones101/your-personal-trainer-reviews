var express = require('express');
var router = express.Router();
var trainersCtrl = require('../controller/trainers');

/* GET users listing. */
router.get('/', trainersCtrl.index);
router.get('/new', trainersCtrl.new);


module.exports = router;