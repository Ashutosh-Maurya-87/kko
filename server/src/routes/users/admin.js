const express = require('express');
const router = express.Router();
const {requireSignin} = require('../../common-middleware')
const {adminSignup, adminSignin} = require('../../controller/auth/admin');
const { validateSignupRequest, validateSigninRequest, isRequestValidated} = require('../../validators/auth');

router.post('/admin/signup', validateSignupRequest, isRequestValidated, adminSignup);

router.post('/admin/signin',validateSigninRequest, isRequestValidated, adminSignin);

router.post('/admin/profile', requireSignin, (req, res) =>{
    res.status(200).send({message: "hiii, You are admin"})
});

module.exports = router;