const express = require('express');
const router = express.Router();
const { requireSignin } = require('../../common-middleware');
const { superAdminSignin, superAdminSignup } = require('../../controller/auth/superAdmin');
const { validateSigninRequest, validateSignupRequest, isRequestValidated } = require('../../validators/auth');

router.post('/superAdmin/signup', validateSignupRequest, isRequestValidated, superAdminSignup);

router.post('/superAdmin/signin', validateSigninRequest, isRequestValidated, superAdminSignin);

router.post('/superAdmin/profile', requireSignin, (req, res) => {
    res.status(200).send({message:"Welcome Super admin"})
});

module.exports = router;