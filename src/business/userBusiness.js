const User = require('../models/user');
const allowedUpdates = require('../models/userFields');

const postUser = async (req, res) => {
    try { 
        const user = new User(req.body);
        await user.save();

        res.status(201).send({ user });

    } catch(ex) {
        res.status(400).send(ex);
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        
        res.send(users);

    } catch(ex) {
        res.status(500).send(ex);
    }
}

const getUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        
        if(!user) {
            return res.status(404).send();
        }

        res.send(user);

    } catch(ex) {
        res.status(500).send();
    }
}

const updateUser = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        
        const isValidOperation = updates.every((update) =>
            allowedUpdates.includes(update)
        );

        if(!isValidOperation) {
            return res.status(400).send({ error: 'Invalid Update'});
        }

        const user = req.user;

        updates.forEach((update) =>
            user[update] = req.body[update]
        );

        await user.save();

        if(!user) {
            return res.status(404).send();
        }

        res.status(200).send(user);

    } catch(ex) {
        res.status(400).send(ex);
    }
}

module.exports = {
    postUser,
    getUsers,
    getUser,
    updateUser
}
