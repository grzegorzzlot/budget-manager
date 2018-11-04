const express = require('express');
const router = express.Router();
const {MongoClient} = require('mongodb');


router.route('/')
  .all((req, res, next) => {
    if(req.user) {
      next();
    } else {
      res.redirect('/error');
    }
  })
  .get((req, res) => {
    console.log(req.user);
    res.render('profile', 
    { 
      title: 'Budget Manager',
      loggedInAs: req.user.username
    });
  })
  .post((req, res) => {

    const url = 'mongodb://localhost:27017';
    const dbName = 'budgetManager';

    (async function addCategory(){
      let client;
      try {
        client = await MongoClient.connect(url);
        console.log('connected')
      }
      catch(err) {
        console.log(err);              
      }
    }());           
  });
module.exports = router;
