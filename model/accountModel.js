const mongoose = require('mongoose');

const acccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    }
})

module.exports = mongoose.model('account', acccountSchema)