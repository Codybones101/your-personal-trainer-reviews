var express = require('express');
var router = express.Router();
var ensuredLogIn = require('../config/ensureLoggedIn');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
