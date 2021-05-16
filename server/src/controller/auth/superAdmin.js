const SuperAdmin = require('../../models/users/superAdmin');
const jwt = require('jsonwebtoken');

exports.superAdminSignup = (req, res) => {
    SuperAdmin.findOne({ email: req.body.email })
        .exec((error, sAdmin) => {
            if (sAdmin) return res.status(400).json({
                message: `Super admin is already registered.`
            });
            const { firstName, lastName, email, password } = req.body;
            const year = new Date();
            const getYear = year.getFullYear()
            const _sAdmin = new SuperAdmin({
                firstName,
                lastName,
                email,
                password,
                role: 'superAdmin',
                userID: ('SA' + getYear + (Math.floor(Math.random() * 10).toString())),
                activationToken: jwt.sign({
                    id: Math.random()
                },
                    process.env.TEMP_TOKEN_SECRET,
                    { expiresIn: 1000 * 1000 * 60 })
            });
            // console.log('checking super admin user', _sAdmin)
            _sAdmin.save((error, data) => {
                // console.log('if me data super admin--', data, 'error---', error)
                if (data) {
                    return res.status(202).json({
                        message: "Super Admin created Successfully",
                        sAdmin: data
                    })
                }
                // console.log('data super admin--', data)
                if (error) {
                    if (error.name === 'SequelizeValidationError') {
                        return res.status(400).send(`Error: ${error.message}`);
                    }
                }
            })
        })
}

exports.superAdminSignin = (req, res) => {
    SuperAdmin.findOne({ email: req.body.email })
        .exec((error, superAdmin) => {
            if (error) {
                return res.status(400).json({ error }).send(`error: ${error.message}`);
            }
            if (superAdmin) {
                if (superAdmin.authenticate(req.body.password) && superAdmin.role == 'superAdmin') {
                    const token = jwt.sign({ _id: superAdmin._id },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName } = superAdmin;
                    res.status(200).json({
                        token,
                        superAdmin: {
                            _id, firstName, lastName, fullName, email, role
                        }
                    });
                } else {
                    return res.status(400).json({ message: 'Something went wrong' })
                }

            }
        })
}


