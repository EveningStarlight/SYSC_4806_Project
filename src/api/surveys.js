const express = require('express');
const router = express.Router();

const Survey = require('../models/survey');

router.get('/', (req, res) => {
    Survey.find()
        .then((surveys) => res.json(surveys))
        .catch((err) => console.log(err));
});

router.post('/:title', (req, res) => {
    const { _id, title, description, questions } = req.body;
    const newSurvey = new Survey({
        _id: _id,
        title: title,
        description: description,
        questions: questions,
    });
    newSurvey
        .save({title:req.params.title})
        .then(() =>
            res.json({
                message: 'Created survey successfully',
            }),
        )
        .catch((err) =>
            res.status(400).json({
                error: err,
                message: 'Error creating survey',
            }),
        );
});
module.exports = router;
