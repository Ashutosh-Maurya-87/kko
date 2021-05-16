const mongoose = require('mongoose');
const scrapSubCatSchema = new mongoose.Schema({
    name: {
        type:String,
        required: "Please Enter a valid Sub-Category name"
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
module.exports = mongoose.model('ScrapCategory', scrapSubCatSchema);