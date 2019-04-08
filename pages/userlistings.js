
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const userListings = require('../UserListings');

router.get('/',
(req, res) => 
  res.render('userlistings')
  

  );
 

module.exports = router;
