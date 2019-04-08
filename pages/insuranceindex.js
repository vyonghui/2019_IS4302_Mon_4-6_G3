
const express = require('express');
const uuid = require('uuid');
const router = express.Router();


router.get('/index',
(req, res) =>
  res.render('insuranceindex'
  ));
 

module.exports = router;
