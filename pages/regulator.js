
const express = require('express');
const uuid = require('uuid');
const router = express.Router();


router.get('/coe',
(req, res) =>
  res.render('regulatorcoe'
  ));

  router.get('/licence',
(req, res) =>
  res.render('regulatorlicense'
  ));
 
 

module.exports = router;
