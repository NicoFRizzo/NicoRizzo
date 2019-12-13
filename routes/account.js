const express = require('express')
const router = express.Router()
const cors = require('cors')

const accountModel = require('../model/accountModel')

router.post('/allAccounts', (req, res, next) => {
        console.log(req.body);
        res.status(201).json({
          message: 'Thing created successfully!'
        });
      });
module.exports = router