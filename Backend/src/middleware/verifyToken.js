// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { unauthorizedResponse } from '../helper/apiResponse.js';

const verifyToken = (req, res, next) => {
    const token = req.header('x-access-token');
    if (!token) return unauthorizedResponse(res, 'No token, authorization denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = {userId: decoded.userId};
        req.user = user;
        next();
    } catch (error) {
        return unauthorizedResponse(res, 'Invalid token');
    }
};

export default verifyToken;
