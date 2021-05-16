const { check, validationResult} = require('express-validator');

exports.validationScrapCategory=[
    check('name')
    .notEmpty()
    .withMessage('Category Name is required')
]

exports.isScrapCatValid = ( req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0 ){
        return res.status(400).json({message:errors.array()[0].msg})
    }     
    next();
}