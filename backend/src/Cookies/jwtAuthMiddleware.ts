// This is middleware for JWT authentication
// This will verify the token and attach the information to it
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWTUserTokenPayload } from './jwtUsercookie';

interface AuthenticationRequest extends Request {
    user?: { user_id: number };
}

export const authJWT = (req: AuthenticationRequest, res: Response, next: NextFunction) => {
    const token = req.cookies['user_token'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const secret = process.env.JWT_SECRET_DECODER_KEY!;
        const decoded = jwt.verify(token, secret) as JWTUserTokenPayload;

        req.user = { user_id: decoded.user_id };
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
}