
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const insuranceDocuments = require('../Insurance');

router.get('/',
(req, res) =>
  res.render('insurance',{
    insuranceDocuments
  }));
 

module.exports = router;
