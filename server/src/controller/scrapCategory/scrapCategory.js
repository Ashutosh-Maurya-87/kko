const slugify = require('slugify');
const ScrapCategory = require('../../models/scraps/scrapCategory');
const ScrapSubCategory = require('../../models/scraps/scrapSubCategory');

exports.createCategory = (req, res) => {
    ScrapCategory.findOne({ name: req.body.name })
        .exec((error, scate) => {
            if (error) {
                res.status(400).json({ error })
            }
            if (scate) {
                res.status(400).json({ message: "Scrap Category is already created" })
            }

            const categoryObj = {
                name: req.body.name,
                slug: slugify(req.body.name)
            }
            console.log('category--------', categoryObj);
            if (req.body.parentID) {
                categoryObj.parentID = req.body.parentID
            }
            if (!scate) {
                console.log('------!scate--------', scate);
                const cate = new ScrapCategory(categoryObj);
                console.log('----cate--------', cate)
                cate.save((error, scrapCate) => {
                    if (error) {
                        console.log('----------error-------', error);
                        return res.status(400).json([error, { message: error }])  //can define error message here
                    };
                    if (scrapCate) {
                        console.log('--------scrapcate----------', scrapCate);
                        return res.status(200).json([{ scrap_Category: scrapCate }, { message: "Category has been created successfully" }])
                    }
                })
            }
        })
};

exports.getCategories = (req, res) => {
    ScrapCategory.find({})
        .exec((error, categories) => {
            if (error) {
                console.log('------error in get ccategories-------', error);
                return res.status(400).json([error, { message: error }]) //errors can be defined here in object
            }
            if (categories) {
                console.log('---------- get categories response------------', categories);
                res.status(200).json([{ message: "All categories are here" }, categories])
            }
        })
}


//-----------------------------sub categories--------------------------------
exports.createSubCategory = (req, res) => {
    ScrapSubCategory.findOne({ name: req.body.name })
        .exec((error, sSubCate) => {
            if (error) {
                res.status(400).json({ error: message })
            }
            if (sSubCate) {
                res.status(400).json({ message: "Sub category has already been created" })
            }
            const subCatObj = {
                name: req.body.name,
                slug: slugify(req.body.name),
                parentID: req.body.parentID
            }
            console.log('----sub category---', subCatObj);
            if (!sSubCate) {
                const subCate = new ScrapSubCategory(subCatObj);
                console.log('-------sub cate----', subCate);
                subCate.save((error, subScrapcate) => {
                    if (error) {
                        console.log('---------error in sub category---', error);
                        return res.status(400).json([error, { message: error }])
                    };
                    if (subScrapcate) {
                        console.log('------------sub scrap cate--------', subScrapcate);
                        return res.status(200).json([{ scrap_Category: subScrapcate }, { message: "Sub category added successfully" }])
                    }
                })
            }
        })
}

// exports.getSubCategories = async (req, res) => {
//     ScrapSubCategory.find({})
//         .exec((error, subCate) => {
//             if (error) {
//                 console.log('--------sub cate - errror--------', error);
//                 return res.status(400).json([error, { message: error }])
//             }
//             if (subCate) {
//                 console.log('------sub category-----------');
//                 return res.status(200).json([{ message: "All subcategories are as follows" }, subCate]);
//             }
//         })
// }

exports.getCategories = (req, res) => {
    ScrapSubCategory.find({})
    .exec((error, subCat) => {
        if(error) {
            res.status(200).json({error:error})
        }
        if(subCat){
            const catList = allCatList(categories);
            res.status(200).json([{message:"following is the categories list"}, categories]); //-------- i was here
        }
    })
}