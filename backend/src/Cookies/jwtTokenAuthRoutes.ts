// This is a route to create and use the JWT cookie
import express, { Request, Response } from 'express';
import { generateToken } from './jwtUsercookie';

const jwtRouter = express.Router();
const { JWT_EXPIRATION } = process.env;

jwtRouter.get('/auth/google/callback', async (req: Request, res: Response) => {
    const { user_id } = req.body; // Receive user_id from the request body

    if (!user_id) {
        return res.status(400).json( {message: 'User ID is required' });
    }

    // Generate a JWT
    const token = generateToken({ user_id });
    const cookieAge = parseInt(JWT_EXPIRATION || '1') * 3600 * 3600;

    res.cookie('user_token', token, {
       httpOnly: true,
       secure: process.env['NODE_ENV'] === 'production',
       sameSite: 'strict',
       maxAge: cookieAge,
    });

    res.status(200).json({ message: 'Token generated and cookie set' });
});

export default jwtRouter;