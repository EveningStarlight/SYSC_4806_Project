import axios from 'axios';

let signUp = async (results) => {
    await axios
        .post('/api/users/createUser', {
            email: results.email,
            password: results.password,
        })
        .then(() => {
            window.localStorage.setItem('email', results.email);
            window.localStorage.setItem('loggedIn', true);
            alert('Account Created Successfully');
        })
        .catch((err) => {
            alert('Could not create Account. Please try again');
        });
};

let signIn = async (results) => {
    await axios
        .post('/api/users/signin', {
            email: results.email,
            password: results.password,
        })
        .then((result) => {
            if (result.data) {
                window.localStorage.setItem('email', results.email);
                window.localStorage.setItem('loggedIn', true);
            }
        });
};

let signOut = () => {
    window.localStorage.setItem('email', null);
    window.localStorage.setItem('loggedIn', false);
};

const isUserLoggedin = () => {
    return window.localStorage.getItem('loggedIn') === 'true';
};

export { isUserLoggedin, signOut, signUp, signIn };
