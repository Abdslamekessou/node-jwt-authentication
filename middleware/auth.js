const jwt = require('jsonwebtoken');
const {BadRequestError , UnauthenticatedError} = require('../errors');
    
const authMiddleware = async (req , res , next)=>{
        const authHeader = req.headers.authorization; 
    
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            throw new UnauthenticatedError('No Token Provided');
        }


        const token = authHeader.split(' ')[1];
        console.log(token);

        try {
            const decoded = jwt.verify(token , process.env.JWT_SECRET)
            const {id , username} = decoded; 
            req.user = {id , username} 
            next()
        } catch (error) {
            throw new  UnauthenticatedError('Not authorized to access this route');
        }
        next();
}

module.exports =authMiddleware