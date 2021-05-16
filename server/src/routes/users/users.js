const express = require('express');
const router = express.Router();
const {requireSignin} = require('../../common-middleware')
const {signup, signin} = require('../../controller/auth/users');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../validators/auth')
//using expressvalidation as middleware

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

router.get('/profile', requireSignin, (req, res) =>{
    res.status(200).send({message: "hiii! you are logged in ---"})
})

module.exports = router;