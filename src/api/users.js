const express = require('express');
const router = express.Router();
const Crypto = require('crypto');

const User = require('../models/users');

router.post('/createUser', (req, res) => {
    const { email, password } = req.body;
    const salt = Crypto.randomBytes(16);

    const user = new User({
        email: email,
        salt: salt,
        passwordHash: Crypto.createHmac('sha256', password + salt),
    });
    user.toObject()
        .save()
        .then(() =>
            res.json({
                message: 'User Created Successfully',
            }),
        )
        .catch((err) =>
            res.status(400).json({
                error: err,
                message: 'Error Creating User',
            }),
        );
});

module.exports = router;
