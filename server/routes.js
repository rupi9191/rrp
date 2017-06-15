var userCtrl = require('./controllers/user');
var orderCtrl = require('./controllers/order');
var referralCtrl = require('./controllers/referral');
var config = require('./config/config');
var moment = require('moment');
var jwt = require('jwt-simple');
var User = require('./models/user');

module.exports = function(app) {
    app.post('/register', userCtrl.signUp);
    app.post('/login', userCtrl.login);
    app.get('/api/users',ensureAuthenticated, userCtrl.getUsers);


    //order apis
    app.post('/api/order/new',ensureAuthenticated,orderCtrl.newOrder)

    //referral api
    app.post('/api/referral/new', ensureAuthenticated, referralCtrl.newReferral);
}

/*
 |--------------------------------------------------------------------------
 | Login Required Middleware
 |--------------------------------------------------------------------------
 */
function ensureAuthenticated(req, res, next) {
      if (!req.headers.authorization) {
        return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
      }

      var token = req.headers.authorization;
      var payload = jwt.decode(token, config.TOKEN_SECRET);

      if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'Token has expired' });
      }
      
      User.getUserById(payload.sub, function(err, user){
          if (err) {
                return res.status(401).send({ message: 'Invalid token' });
          } else {
              req.user = payload.sub;
              next();
          }
      })
}