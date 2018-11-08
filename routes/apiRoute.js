const express = require('express');
const router = express.Router();
//mongose connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/budgetManager');

var Category = require('../Models/categories');
let user = require('./profileRoute');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    console.log(user);   
    next();
});

router.route('/')
    .get((req, res) => {
        res.json({message: "Connected to api"});
    });

router.route('/categories')
    .post((req, res) => {

        const category = new Category();      
        category.name = req.body.name;  
      
        category.save((err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: 'Category created!' });
            }            
        });

    })
    .get((req, res) => {
        Category.find(function(err, category) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(category);
            }              
        });
    });


module.exports = router;