
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const transactions = require('../Transactions');


router.get('/',
(req, res) =>
  res.render('transactions', {
   transactions
  }));
 

module.exports = router;
