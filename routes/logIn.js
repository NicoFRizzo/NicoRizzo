const key = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const express = require('express')
const router = express.Router()
const accountsRegistered = require('../model/logInModel.js')

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

    console.log("POST ROUTE", user.user);
    console.log("POST ROUTE", user.password);

    accountsRegistered.findOne({ "user": user.user }, (err, response) => {

        if (err) return "error";
        console.log(response);
        console.log(key.secretOrKey);

        bcrypt.compare(user.password, response.password, function (err, isMatch) {
            if (err) throw err;
            console.log('Is password match :', isMatch);

            const options = { expiresIn: 2592000 };
            jwt.sign(
                payload,
                key.secretOrKey,
                options,
                (err, token) => {
                    if (err) {
                        console.log(err);

                        res.json({
                            success: false,
                            token: "There was an error"
                        });
                    } else {
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                }
            );
        })
    });
});

module.exports = router