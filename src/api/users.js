const express = require('express');
const router = express.Router();
const Crypto = require('crypto');

const User = require('../models/user');

router.get('/', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => console.log(err));
});

router.post('/:type', (req, res) => {
    const type = req.params.type;
    if (type === 'createUser') {
        createUser(req, res);
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

module.exports = router;
