
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const fetch = require('node-fetch');
router.get('/',
(req, res) => 
  res.render('listings')
  

  );

  router.get('/:id', (req, res) => {
res.render('listingdetails', {
    id: req.params.id
})
  });
 

module.exports = router;
