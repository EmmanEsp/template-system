const express = require('express');
const router = new express.Router();
const { authLogin } = require('../business/authBusiness');

router.post(
    '/auth/login', 
    async (req, res) => await authLogin(req, res)
); 

module.exports = router;
