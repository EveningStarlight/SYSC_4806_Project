import axios from 'axios';
var database = require('../database/data.json');

let signUp = (results) => {
    axios
        .post('/api/users/createUser', {
            email: results.email,
            password: results.password,
        })
        .then(() => {
            alert('Account Created Successfully');
        })
        .catch((err) => {
            alert('Could not create Account. Please try again');
        });
};

const getUsers = () => {
    return axios.get('/api/users/').then((users) => {
        return users.data;
    });
};

function isUserLoggedin() {
    return database.isLoggedIn;
}

function toggleSignIn() {
    database.isLoggedIn = !database.isLoggedIn;
}

export { isUserLoggedin, toggleSignIn, signUp };
