var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');

/* GET sign Up page. */
router.get('/', (req, res, next) => {
  res.render('signUp', 
  { 
    title: 'Budget Manager'
  });
});
router
  .post('/', (req, res) => {
    const {username, password} = req.body;
    const url = 'mongodb://localhost:27017';
    const dbName = 'budgetManager';

    (async function addUsers(){
      let client;
      try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const col = db.collection('users');
        const user = {username, password};
        const results = await col.insertOne(user);
        req.login(results.ops[0], () => {
          res.redirect('/profile');
        });
      }
      catch(err) {
        debug(err);      
        
      }
    }());
  
    
       
  });

module.exports = router;
