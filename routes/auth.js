
const express = require('express');
const auth_opearations = require('../controller/auth');
const router = express.Router();

// router methods
router.post('/signup',auth_opearations.signup)
router.post('/login',auth_opearations.login)

module.exports=router;
