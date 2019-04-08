
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const coes = require('../COE');


router.get('/',
(req, res) =>
  res.render('coes', {
   coes
  }));
 

module.exports = router;
