const express = require('express')
const router = express.Router()
const newUser = require('../model/accountModel')


router.post('/create', (req, res) => {

  var user = new newUser({
    user: req.body.user,
    password: req.body.password
  });

  console.log(user);

  user.save(function (err) {
    if (err) return handleError(err);

    res.status(200).json({
      message: 'Thing created successfully!'
    });
  });


});

module.exports = router