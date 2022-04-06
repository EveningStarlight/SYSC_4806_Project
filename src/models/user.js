const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { object } = require('yup');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema, 'users');
