const express = require('express');
const router = express.Router();
const passport = require('passport');



router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],

  },
));


router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/artwork', 
    failureRedirect : '/artwork' 
  }
));


router.get('/logout', function(req, res){
  req.logout(function(){ 
    res.redirect('/artwork')
  })
})


router.get('/', function(req, res) {
  res.redirect('/artwork');
});


module.exports = router;
