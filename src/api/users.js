const express = require('express');
const router = express.Router();
const Crypto = require('crypto');

const User = require('../models/user');
const { mainModule } = require('process');

router.post('/:type', (req, res) => {
    switch (req.params.type) {
        case 'createUser':
            createUser(req, res);
            break;
        case 'signin':
            signin(req, res);
            break;
    }
});

const createUser = (req, res) => {
    const { email, password } = req.body;
    const salt = Crypto.randomBytes(16).toString('hex');
    const hmac = Crypto.createHmac('sha256', salt);
    const hash = hmac.update(password);
    const newUser = new User({
        email: email,
        salt: salt,
        passwordHash: hmac.digest('hex'),
    });
    newUser
        .save()
        .then(() =>
            res.json({
                message: 'Created account successfully',
            }),
        )
        .catch((err) =>
            res.status(400).json({
                error: err,
                message: 'Error creating account',
            }),
        );
};

const signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email })
        .then((user) => {
            const hmac = Crypto.createHmac('sha256', user.salt);
            const hash = hmac.update(password);
            const passwordHash = hmac.digest('hex');
            return passwordHash === user.passwordHash
                ? res.json(true)
                : res.json(false);
        })
        .catch((err) => console.log(err));
};

module.exports = router;
