const express = require('express')
const router = express.Router()
const cors = require('cors')

const cityModel = require('../model/cityModel')


router.get('/test', cors(), (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

router.get('/all', cors(),
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

module.exports = router