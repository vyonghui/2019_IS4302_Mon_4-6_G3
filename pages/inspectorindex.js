
const express = require('express');
const uuid = require('uuid');
const router = express.Router();


router.get('/index',
(req, res) =>
  res.render('inspectorindex'
  ));

  router.get('/documents',
(req, res) =>
  res.render('inspectordocuments'
  ));
 

module.exports = router;
