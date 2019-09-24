const User = require('../models/user');

const authLogin = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );

        const token = await user.generateAuthToken();

        res.send({ user, token });

    } catch(ex) {
        res.status(400).send(ex.message);
    }
}

const authLogout = async (Req, res) => {

}

module.exports = {
    authLogin,
    authLogout
}