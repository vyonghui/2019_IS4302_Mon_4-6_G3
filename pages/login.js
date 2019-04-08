
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const session = require('express-session');
const app = express();
var proxy = require('express-http-proxy');
router.get('/',
(req, res) => {

  res.render('login')
}
  );
 
//   router.post('/', (req, res) => {
//     const currentUser = {
    
//       username: req.body.username,
//       password: req.body.password,
//       userType: req.body.userType,
//     };

//     //find user in database;

//     //get token
// console.log(currentUser);
//     // const token = '2jur3253k';

    
//   //  res.cookie('loggedInUser', currentUser, {path: '/'});
    
//   //   app.use('/hlf', proxy('localhost:3001/'))
//   //   res.redirect('/dashboard');
   
//   });
  
module.exports = router;
