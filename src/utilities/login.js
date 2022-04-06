import axios from 'axios';
var database = require('../database/data.json');

let signUp = (results) => {
    axios
        .post('/api/users/createUser', {
            email: results.email,
            password: results.password,
        })
        .then(function () {
            alert('Account Created Successfully');
        })
        .catch(function () {
            alert('Could not create Account. Please try again');
        });
};

function isUserLoggedin() {
    return database.isLoggedIn;
}

function toggleSignIn() {
    database.isLoggedIn = !database.isLoggedIn;
}

export { isUserLoggedin, toggleSignIn, signUp };
