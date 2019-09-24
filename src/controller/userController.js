const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');

const { 
    postUser, 
    getUsers, 
    getUser,
    updateUser
} = require('../business/userBusiness');

router.post(
    '/users', 
    async (req, res) => await postUser(req, res)
);

router.get(
    '/users',
    auth,
    async (req, res) => await getUsers(req, res)
);

router.get(
    '/users/:id',
    auth,
    async (req, res) => await getUser(req, res) 
);

router.patch(
    '/users',
    auth,
    async (req, res) => await updateUser(req, res)
);

module.exports = router;
