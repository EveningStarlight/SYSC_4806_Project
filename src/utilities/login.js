var database = require('../database/data.json');

function isUserLoggedin() {
    return database.isLoggedIn;
}

function toggleSignIn() {
    database.isLoggedIn = !database.isLoggedIn;
}

export { isUserLoggedin, toggleSignIn };
