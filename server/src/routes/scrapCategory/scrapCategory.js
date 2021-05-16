const express = require('express');
const router = express();
const { createCategory, getCategories, getSubCategories, createSubCategory } = require('../../controller/scrapCategory/scrapCategory');
const { requireSignin ,adminMiddleware } = require('../../common-middleware/index');
const { isScrapCatValid } = require('../../validators/scrapCategory/scrapCategory');

//-----------scrap category---------
router.post('/admin/scrap-category/create', requireSignin, adminMiddleware, isScrapCatValid, createCategory);
router.get('/scrap-category', getCategories);

//---------sub category----------
router.post('/admin/scrap-sub-category/create', requireSignin, adminMiddleware, createSubCategory)
router.get('/admin/scrap-sub-category', getSubCategories)
module.exports = router;