
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const session = require('express-session');


router.get('/',
(req, res) => {
  
  res.render('index');


}
  );



  module.exports = router;