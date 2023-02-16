var express = require('express');
var router = express.Router();
var trainersCtrl = require('../controller/trainers');
var ensuredLogIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.get('/', ensuredLogIn, trainersCtrl.index);
router.get('/new', ensuredLogIn, trainersCtrl.new);
router.get('/:id', trainersCtrl.show);
router.get('/:id/edit', trainersCtrl.edit);
router.post('/', trainersCtrl.create);
router.delete('/:id', ensuredLogIn, trainersCtrl.delTrainer);
router.put('/:id', ensuredLogIn, trainersCtrl.update);


module.exports = router;