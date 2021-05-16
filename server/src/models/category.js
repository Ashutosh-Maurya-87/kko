const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    slug:{
        type:String,
        required= true,
        trim: true
    },
    parentId:{
        type:String
    }
}, {timestamps:true});
module.exports = mongoose.model('categary', categorySchema);