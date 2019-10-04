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
    async (req, res) => {
        try { 

            const user = await postUser(req.body);  
            res.status(201).send({ user });
    
        } catch(ex) {
            res.status(400).send(ex);
        }
    }
);

router.get(
    '/users',
    auth,
    async (req, res) => {
        try { 
            
            const users = await getUsers();
            res.send(users);

        } catch(ex) {
            res.status(500).send(ex);
        }
    }
);

router.get(
    '/users/:id',
    auth,
    async (req, res) => {
        try { 
            
            const user = await getUser(req.params.id);
    
            if(!user) {
                return res.status(404).send();
            }
        
            res.send(user); 

        } catch(ex) {
            res.status(500).send();
        }
    }
);

router.patch(
    '/users',
    auth,
    async (req, res) => { 
        try {
            const user = await updateUser(req.body, req.user);
            
            if(!user) {
                return res.status(404).send();
            }

            res.status(200).send(user);

        } catch(ex) {
            res.status(400).send(ex);
        }
    }
);

module.exports = router;
