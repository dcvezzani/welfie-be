var express = require('express');
var db = require('../db');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/messages')
  .get(function(req, res) {

    db.index_messages()
    .then((messages) => {
      res.json(messages.collection);
    }); 
  })
  .post(function(req, res) {

    db.create_message(req.body)
    .then((message) => {
      res.status = 201;
      res.json(message.model);
    }); 
  })

router.route('/messages/:id')
  .get(function(req, res) {

    db.show_message(req.params.id)
    .then((message) => {
      res.json(message.model);
    }); 
  })

// more routes for our API will happen here

module.exports = router;
