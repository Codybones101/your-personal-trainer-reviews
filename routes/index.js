var express = require('express');
var router = express.Router();
const passport = require('passport');
var ensuredLogIn = require('../config/ensureLoggedIn');

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Your personal trainer reviews' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    // Optional
    prompt: 'select_account'
  }
));

router.get('/mission', function(req, res, next) {
  res.render('mission', { title: 'Our Mission' });
});

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    // Change to what's best for YOUR app
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your "landing" page
    res.redirect('/');
  });
});

module.exports = router;
