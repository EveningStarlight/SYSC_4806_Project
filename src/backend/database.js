const mongoose = require('mongoose');
const connection = "mongodb+srv://user:password124@surveygorilla.zlnea.mongodb.net/SurveyGorilla?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));