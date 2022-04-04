const mongoose = require('mongoose');
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
        type: [],
        required: true,
    },
});
module.exports = mongoose.model('Survey', surveySchema, 'surveys');
