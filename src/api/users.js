const express = require('express');
const router = express.Router();
const Crypto = require('crypto');

const User = require('../models/user');



router.get('/', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const salt = Crypto.randomBytes(16);
    const newUser = new User({
        email: email, password: password
        //salt: salt,
        //passwordHash: Crypto.createHmac('sha256', password + salt),
    })
    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
});

module.exports = router;
