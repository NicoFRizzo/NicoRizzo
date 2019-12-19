const express = require('express');
const router = express.Router();
const cors = require('cors');

const cityModel = require('../model/cityModel');

router.get('/all', cors(), (req, res) => {
  console.log('aassss');
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;
