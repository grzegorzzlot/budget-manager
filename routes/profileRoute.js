const express = require('express');
const router = express.Router();
let userID = null;

router.route('/')
  .all((req, res, next) => {
    if(req.user) {
      next();
    } else {
      res.redirect('/error');
    }
  })
  .get((req, res) => {
    //get current user ID
    userID = req.user._id;
    console.log(userID);    
    res.render('profile', 
    { 
      title: 'Budget Manager',
      loggedInAs: req.user.username
    });
  })
  
module.exports = router;
