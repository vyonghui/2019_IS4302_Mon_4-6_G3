const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
const userListings = require('./UserListings');
const myListings = require('./MyListings');

const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const app = express();

var proxy = require('express-http-proxy');
app.use('/hlf', proxy('localhost:3000/')); //admin
app.use('/winston', proxy('localhost:3001/')); //1111 (winston)
app.use('/steve', proxy('localhost:3002/')); 
app.use('/alice', proxy('localhost:3003/')); 
app.use('/lta', proxy('localhost:3004/')); 
app.use('/sta', proxy('localhost:3005/'));
app.use('/aia', proxy('localhost:3006/')); 


// winston 3001
// lta 3002
// inspector 3003

// npm run start_rest-server admin@secondhandcar-sales-network 3000
// npm run start_rest-server winston@secondhandcar-sales-network 3001
// npm run start_rest-server lta@secondhandcar-sales-network 3002
// npm run start_rest-server alice@secondhandcar-sales-network 3003


// app.use('/lta', proxy('localhost:3002/')); //regulator
//  app.use('/steve', proxy('localhost:3003/')); //regulator
// // app.use('/aia', proxy('localhost:3004/')); //insurance
// //app.use('/sta', proxy('localhost:3005/')); //inspector




// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('images')); 


// Set static folder

setupRoutes('admin');

function setupRoutes(userType) {
  if (userType == 'admin') {
    app.use('/login', require('./pages/login'));

    
  app.post('/login', (req, res) => {

    let  username= req.body.username;
    let   password= req.body.password;
    let   userType= req.body.userType;

     var token = username+"wf40gkso352"+userType+"ke235nfrd45t";
    
   res.cookie('loggedInUser', token, {path: '/'});
 
res.end();
changeRoute(userType);
  }); 


 
// // }
  }


 


}
app.post('/logout', (req, res) =>  {
  console.log("WORKR");
  res.clearCookie('loggedInUser');
  res.end();
})
function changeRoute(userType) {

  if (userType == 'user') {
    app.use('/', require('./pages/dashboard'));
    app.use('/dashboard', require('./pages/dashboard'));
    app.use('/userlistings', require('./pages/userlistings'));
    app.use('/cars', require('./pages/cars'));
    app.use('/insurance', require('./pages/insurance'));
    app.use('/coe', require('./pages/coe'));
    app.use('/newcar', require('./pages/newcar'));
    app.use('/listings', require('./pages/listings'));
    app.use('/mylistings', require('./pages/mylistings'));
    app.use('/transactions', require('./pages/transactions'));
  } else if (userType == 'regulator') {
    app.use('/regulator', require('./pages/regulator'));
  } else if (userType == 'insuranceAgent') {
    app.use('/insurance', require('./pages/insuranceindex'));
  } else if (userType == 'inspector') {
    app.use('/inspector', require('./pages/inspectorindex'));
  }
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));























// const express = require('express');
// const path = require('path');
// const exphbs = require('express-handlebars');
// const logger = require('./middleware/logger');
// const members = require('./Members');
// const userListings = require('./UserListings');
// const myListings = require('./MyListings');

// const bodyParser = require('body-parser');
// const session = require('express-session');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const errorHandler = require('errorhandler');
// var app = express();
// var router = undefined;
// var proxy = require('express-http-proxy');
// mongoose.promise = global.Promise;
// const isProduction = process.env.NODE_ENV === 'production';
// if(!isProduction) {
//   app.use(errorHandler());
// }

// // Handlebars Middleware
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use(require('morgan')('dev'));
// app.use(bodyParser.urlencoded({
//   extended: true  
// }))
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('images')); 
// //setUpLogin();
// // Body Parser Middleware
// app.use('/newcar', require('./pages/newcar'));
// app.use('/hlf', proxy('localhost:3001/'));
// // function setUpLogin() {

// // app.use('/login', require('./pages/login'));

// //   app.post('/login', (req, res) => {
// //   console.log('rhgjtrdg');
// //     let  username= req.body.username;
// //     let   password= req.body.password;
// //     let   userType= req.body.userType;
// //      var token = username+"wf40gkso352"+userType+"ke235nfrd45t";
// //      setUpUser();
// //    res.cookie('loggedInUser', token, {path: '/'});
// // res.end();
// //   }); 
// //   app.use('/hlf', proxy('localhost:3001/'));
// //   app.use('/newcar', require('./pages/newcar'));

 
// // }

// // function setUpUser() {
// //   console.log("BEFORE");
// //   console.log(app._router.stack);
// //   app._router.stack.pop();
// //   console.log("AFTER");
// //   app.use('/hlf', proxy('localhost:3001/'));
// //   console.log(app._router.stack);
// //   app.use('/dashboard',require('./pages/dashboard'));
// //   app.use('/cars',require('./pages/cars')  );
// //   app.use('/transactions', require('./pages/transactions'));
// //   app.use('/userlistings', require('./pages/userlistings'));
// //   app.use('/cars',require('./pages/cars')  );
// //   app.use('/insurance', require('./pages/insurance'));
// // app.use('/coe', require('./pages/coe'));
// // app.use('/newcar', require('./pages/newcar'));
// // }







// // function setUpRoutes(userType) {
// //  console.log("RESET ROUTES");
// //  console.log(app._router.stack);
// //   while(app._router.stack.length > 0) {
// //     app._router.stack.pop();
// //   }
// //   app = express();
// //   app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// //   app.set('view engine', 'handlebars');
// //   app.use(express.json());
// //   app.use(express.urlencoded({ extended: false }));
// //   app.use(cors());
// //   app.use(require('morgan')('dev'));
// //   app.use(bodyParser.urlencoded({
// //     extended: true
// //   }))
// //   app.use(bodyParser.json());
// //   app.use(express.static(path.join(__dirname, 'public')));
// //   app.use(express.static('images')); 
// //   console.log(app._router.stack );
 
// // if (userType == 'admin') {
// //   //app.use('/dashboard',require('./pages/dashboard'));
// //   app.use('/hlf', proxy('localhost:3003/'));
// //   app.use('/login', require('./pages/login'));
// //   app.post('/login', (req, res) => {
// //     let  username= req.body.username;
// //     let   password= req.body.password;
// //     let   userType= req.body.userType;
 
// //      var token = username+"wf40gkso352"+userType+"ke235nfrd45t";
// //    res.cookie('loggedInUser', token, {path: '/'});
// //    console.log("1");
// //    defineRoutes('user');
// //    console.log("HI");
// //   res.end();
// //   }); 
// // } else if (userType == 'user') {
// //   console.log("6");
// //   app.use('/hlf', proxy('localhost:3001/'));
// //   app.use('/dashboard',require('./pages/dashboard'));
// //   app.use('/cars',require('./pages/cars')  );
// //   app.use('/transactions', require('./pages/transactions'));
// //   app.use('/userlistings', require('./pages/userlistings'));
// //   app.use('/cars',require('./pages/cars')  );
// //   app.use('/insurance', require('./pages/insurance'));
// // app.use('/coe', require('./pages/coe'));
// // // router.get('/',
// // // (req, res) =>
// // //  res.render('newcar'));
// //  app.use('/listings', require('./pages/listings'));

// // }
// // }



 
// // defineRoutes('admin');

// // function defineRoutes(userType) {
// //   console.log("2");
// //   console.log(userType);
 
// //   console.log("3");
// //   if (userType === 'admin') {
// //     console.log("Admin");
// //     session.proxy = 'admin';
// //     setUpRoutes(userType);
 

// //    // console.log(app._router.stack);
 
// //   } else if (userType == 'user') {
// //     console.log("User");
// //     session.proxy = 'user';
// //     console.log("4");
   
    
// //   } else if (userType == 'insurance') {
// //     console.log("Insurance");
// //     session.proxy = 'insurance';
// //     router.use('/insurance', require('./pages/insuranceindex'));
// // } else if (userType == 'regulator') {
// //   console.log("Regulator");
// //   session.proxy = 'regulator';
// //   router.use('/regulator', require('./pages/regulator'));
// // } else if (userType == 'inspector') {
// //   console.log("Inspector");
// //   session.proxy = 'inspector';
// //   router.use('/inspector', require('./pages/inspectorindex'));
// // }
// // }


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
