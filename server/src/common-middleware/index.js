const jwt = require('jsonwebtoken');

exports.requireSignin = (req, res, next) =>{
    //use in postman ==> Headers -> add new key/value --> Authorization --> Bearer paste token
    if(req.headers.authorization){
        console.log('-------req.headers.authorization--------', req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log('---------token-----------', token);
        if(token){
            const user = jwt.verify(token, process.env.JWT_SECRET);
            console.log('------user--------', user);
            req.user = user;
        }
        next();
    }
    else{
        res.status(400).json({message: "Authorization Required"})
    }
}

exports.userMiddleware =(req, res, next) => {
     if(req.user.role != 'user') {
         res.status(400).json({message: "User Access Denies"})
     }
     next();
}

exports.adminMiddleware = (req, res, next) => {
    if(req.user.role != 'admin'){
        res.status(400).json({message: "Access Denied"})
    }
    next();
}


exports.superAdminMiddleware = (req, res, next) =>{
}
