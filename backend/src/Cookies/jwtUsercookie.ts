// This defines our cookies JWT payload
// It is responsible for signing the cookie
import jwt from 'jsonwebtoken';

export interface JWTUserTokenPayload {
    user_id: number;
}

export const generateToken = (payload: JWTUserTokenPayload): string => {
    const { JWT_SECRET_DECODER_KEY, JWT_EXPIRATION } = process.env;
    const secret = JWT_SECRET_DECODER_KEY;

    if (!secret) {
        throw new Error("JWT_SECRET_DECODER_KEY is not defined in the environment variables.");
    }

    const options = { expiresIn: `${JWT_EXPIRATION}h` };

    return jwt.sign(payload, secret, options);
}