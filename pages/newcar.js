
const express = require('express');
const uuid = require('uuid');
const router = express.Router();


router.get('/',
(req, res) =>
  res.render('newcar'));
 

module.exports = router;
