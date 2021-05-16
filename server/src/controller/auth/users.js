const User = require('../../models/users/user');
const jwt = require('jsonwebtoken');
//const {  sendMailToUser } = require('../utils/nodemailer') 
const { validationResult } = require('express-validator');

exports.signup = (req, res) => {
    //     const errors = validationResult(req);
    //    return res.status(400).json({errors: errors.array(),message:errors })

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            //if user existed
            if (user) return res.status(400).json({
                message: 'User is already registered'
            });

            const { firstName,
                lastName,
                email,
                password,
                contact,
            } = req.body;
            const year = new Date();
            const getYear = year.getFullYear();

            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                contact,
                userID: ('US' + getYear + Math.floor(Math.random() * 1000000).toString()),
                activationToken: jwt.sign({
                    id: Math.random(),
                    // role: 'admin'
                },{role: 'admin'},
                    process.env.TEMP_TOKEN_SECRET,
                    { expiresIn: 1000 * 1000 * 60 })
            });
            // sendMailToUser( req.body.email, _user.activationToken)
            // console.log('testing activation token', activationToken)
            // res.status(202).send({message: "Hi .. Your account activated successfully" })

            // console.log('Checking saving user', _user)
            _user.save((error, data) => {
                // console.log('consoling data',  "This is for error", error)
                if (data) {
                    return res.status(202).json({
                        message: "user created successfully",
                        user: data
                    })
                }

                if (error) {
                    if (error.name === "SequelizeValidationError") {
                        return res.status(400).send(`error: ${error.message}`);
                    }
                }

            })

        })
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({ error }).send(`error: ${error.message}`);
            }
            if (user) {

                if (user.authenticate(req.body.password)) {

                    const token = jwt.sign({ _id: user._id, role:user.role, email:user.email, user  },{role:user.role}, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName } = user;

                    //                            console.log('this is user type', user)

                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    });
                }
            } else {
                return res.status(400).json({ message: 'Something went wrong' })
                message: 'Invalid Password'
            }
        })
}
