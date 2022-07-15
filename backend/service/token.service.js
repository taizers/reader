const jwt = require('jsonwebtoken');
const db = require('../db');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: '2h'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken,
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);

            return userData;
        } catch (error) {
                return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);
            return userData;
        } catch (error) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const user = await db.query('SELECT * FROM tokens where userId = $1', [userId]);
        if (user.rows[0]) {
            return await db.query('UPDATE tokens set refreshToken = $1 where userId = $2', [refreshToken, userId]);
        }
        return await db.query('INSERT INTO tokens (userId, refreshToken) values ($1, $2)', [userId, refreshToken]);
    }

    async removeToken(refreshToken) {
        await db.query('DELETE FROM tokens where refreshToken = $1', [refreshToken]);
    }

    async findToken(refreshToken) {
        const tokenData = await db.query('SELECT * FROM tokens where refreshToken = $1', [refreshToken]);
        return tokenData;
    }
}

module.exports = new TokenService();
