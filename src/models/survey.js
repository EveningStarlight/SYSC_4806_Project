const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const { object } = require('yup');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: {
        type: Object,
        required: true,
    },
});

module.exports = mongoose.model('Survey', surveySchema, 'surveys');
