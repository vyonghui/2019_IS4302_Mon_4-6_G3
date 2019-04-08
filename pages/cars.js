
const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const myCars = require('../MyCars');

router.get('/',
(req, res) =>
  res.render('cars', {
    myCars
  }));
 

module.exports = router;
