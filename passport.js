const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const key = require('./keys');
const User = require('./model/logInModel');
const passport = require('passport');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('passport 1 log: ', jwt_payload.id);
    User.findById(jwt_payload.id)
      .then(user => {
        console.log('passport 2 log: ', user);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);
