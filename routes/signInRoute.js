const express = require('express');
const router = express.Router();
const passport = require('passport');

router.route('/')
  .get((req, res, next) => {  
    res.render('signIn', 
    { 
      title: 'Budget Manager',
    });    
  })
  .post(passport.authenticate('local',{
      successRedirect: '/profile',
      failureRedirect: '/',
  }))

module.exports = router;
