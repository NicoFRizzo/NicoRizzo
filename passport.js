// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const User = require('./model/accountModel');
// const key = require('./keys');
// const passport = require('passport');
// const express = require('express');
// const router = express.Router();

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = key.secretOrKey;

// module.exports = passport.use(
//   new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log('3322211');
//     User.findById(jwt_payload.user)
//       .then(user => {
//         console.log('user', user);

//         if (user) {
//           return done(null, user);
//         }
//         return done(null, false);
//       })
//       .catch(err => console.log(err));
//   })
// );

// // router.get(
// //   '/',
// //   passport.authenticate('jwt', { session: false }),
// //   (req, res) => {
// //     console.log('req_user', req.user);

// //     userModel
// //       .findOne({ _id: req.user.id })
// //       .then(user => {
// //         res.json(user);
// //       })
// //       .catch(err => res.status(404).json({ error: 'User does not exist!' }));
// //   }
// // );

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./model/accountModel');
const key = require('./keys');
const passport = require('passport');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('opts');
    console.log(opts);
    User.findById(jwt_payload.user)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);
