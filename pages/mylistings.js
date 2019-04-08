
const express = require('express');
const uuid = require('uuid');
const router = express.Router();


router.get('/',
(req, res) =>
  res.render('mylistings'));

  router.get('/:id', (req, res) => {
    res.render('mylistingdetails', {
        id: req.params.id
    })
      });


     
 

module.exports = router;
