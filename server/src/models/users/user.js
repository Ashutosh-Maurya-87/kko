const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max: 40
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max: 40
    },
    userID:{
        type:String,
        required:true,
        trim:true,
        max: 40,
        unique:true,
        index:true,
        uppercase: true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        min:3,
        unique:true,
        lowecase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user'],
        default: 'user'
    },
    contact:{
        type:String,
    },
    profilePicture:{ type:String},
    jwt:{type:String},
    activationToken:{type:String}
},  {timestamps:true});

userSchema.virtual('password')
    .set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10)
});

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
})

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', userSchema);


