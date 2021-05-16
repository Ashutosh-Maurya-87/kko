const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const superAdminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },
    email: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 60,
        unique: true,
        index: true,
        lowecase: true,
    },
    userID: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20,
        unique: true,
        uppercase: true
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['superAdmin'],
        default: 'superAdmin'
    },
    contact: {
        type: String,

    },
    profilePicture: {
        type: String
    },
    jwt: { type: String },
    activationToken: { type: String }
}, { timestamps: true });
superAdminSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 20)
    });

superAdminSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

superAdminSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}

module.exports = mongoose.model('SuperAdmin', superAdminSchema);