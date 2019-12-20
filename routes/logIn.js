const key = require('../keys').secretOrKey;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const express = require('express');
const router = express.Router();
const accountsRegistered = require('../model/logInModel.js');

const payload = {
  id: accountsRegistered._id,
  username: accountsRegistered.user,
  avatarPicture: accountsRegistered.picture
};

router.post('/validation', (req, res) => {
  var user = new accountsRegistered({
    user: req.body.user,
    password: req.body.password
  });

  accountsRegistered.findOne({ user: user.user }, (err, response) => {
    if (err) return 'error';

    bcrypt.compare(user.password, response.password, function(err, isMatch) {
      if (err) throw err;

      const options = { expiresIn: 2592000 };
      console.log('LogIn log: ', response._id);
      jwt.sign({ id: response._id }, key, options, (err, token) => {
        if (err) {
          console.log(err);

          res.json({
            success: false,
            token: 'There was an error'
          });
        } else {
          res.json({
            success: true,
            token: token
          });
        }
      });
    });
  });
});

module.exports = router;
