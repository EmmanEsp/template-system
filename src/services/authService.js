const User = require('../models/user');

async function authLogin(email, password) {

    const user = await User.findByCredentials(
        email,
        password
    );

    const token = await user.generateAuthToken();

    return { user, token }; 
}

async function authLogout(req, res) {

}

module.exports = {
    authLogin,
    authLogout
}