const express = require('express');
const router = new express.Router();
const { authLogin } = require('../business/authBusiness');

router.post(
    '/auth/login', 
    async (req, res) => { 
        try {
            const session = await authLogin(
                req.body.email,
                req.body.password
            ); 
    
            res.send(session);
    
        } catch(ex) {
            res.status(400).send(ex.message);
        }
    }
); 

module.exports = router;
