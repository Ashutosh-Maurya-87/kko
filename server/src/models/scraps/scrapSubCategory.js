const mongoose = require('mongoose');
const scrapCatSchema = new mongoose.Schema({
    name: {
        type:String,
        required: "Please Enter a valid Category name"
    },
    slug: {
        type: String,
        trim: true,
        required: true,
    },
    parentID:{
        type:String
    }
}, {timestamps: true});
module.exports = mongoose.model('ScrapSubCategory', scrapCatSchema);