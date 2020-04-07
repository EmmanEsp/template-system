const User = require('../models/user');
const allowedUpdates = require('../models/userFields');

async function postUser(newUser) { 
    
    const user = new User(newUser);
    
    await user.save();

    return user;
}

async function getUsers() { 
    return await User.find({}); 
}

async function getUser(_id) {  
    return await User.findById(_id);
}

async function updateUser(values, user) {
    
    const updates = Object.keys(values);
    
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if(!isValidOperation) {
        throw new error('Invalid Update');
    }

    updates.forEach((update) =>
        user[update] = values[update]
    );

    await user.save();

    return user; 
}

module.exports = {
    postUser,
    getUsers,
    getUser,
    updateUser
} 