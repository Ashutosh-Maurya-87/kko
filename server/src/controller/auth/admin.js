const Admin = require('../../models/users/admin');
const jwt = require('jsonwebtoken');
//const {  sendMailToUser } = require('../utils/nodemailer') 

const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

//---------admin signup/login start ----------
exports.adminSignup = (req, res) => {
    Admin.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error });
            //if user existed
            if (user) return res.status(400).json({
                message: 'Admin is already registered'
            });

            const { firstName,
                lastName,
                email,
                password
            } = req.body;

            const year = new Date();
            const getYear = year.getFullYear();
            const _admin = new Admin({
                firstName,
                lastName,
                email,
                password,
                role: 'admin',
                userID: ('AD' + getYear + Math.floor(Math.random() * 100).toString()),
                // activationToken: jwt.sign({ id: Math.random(),role: req.body.role  },process.env.TEMP_TOKEN_SECRET, { expiresIn: 1000 * 1000 * 60 }),
                // activationToken: jwt.sign({ id: Math.random(),role: req.body.role  },process.env.TEMP_TOKEN_SECRET, { expiresIn: 1000 * 1000 * 60 }),


            });
            // console.log('checking super admin user', _admin)

            _admin.save((error, data) => {
                // console.log('if me data super admin--', data, 'error---', error)
                if (data) {
                const token = generateJwtToken(data._id, data.role);
                    return res.status(202).json({
                        token,
                        message: "Admin created successfully",
                        user: data
                    });
                }
                if (error) {
                    if (error.name === "SequelizeValidationError")
                        return res.status(400).send(`error: ${error.message}`);
                }
            });
        });
}

exports.adminSignin = (req, res) => {
    Admin.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({ error }).send(`error: ${error.message}`);
            }
            if (user) {
                if (user.authenticate(req.body.password) && user.role === 'admin') {
                    console.log('===========login user type===========', user.role)
                    // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const token = generateJwtToken(user._id, user.role);
                    const { _id, firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    });
                }
            } else {
                return res.status(400).json({ message: 'Something went wrong' })
            }
        })
}
//---------admin signup/login end ----------
