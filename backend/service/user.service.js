const db = require('../db');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail.service');
const tokenService = require('./token.service');
const UserDto = require('../dtos/user.dto');
const ApiError = require('../exceptions/api.errors');

const getUserForResponceWithToken = async (user) => {
    const userDto = new UserDto(user.rows[0]);

    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    
    return {...tokens, user: userDto}
}

class UserService {
    async signUp(email, password, name) {
        const candidate = await db.query('SELECT * FROM users where email = $1', [email]);

        if (candidate.rows[0]) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`);
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const activationLink = await uuid.v4();

        const user = await db.query(
            'INSERT INTO users (name, email, password, activationLink) values ($1, $2, $3, $4) RETURNING *', [name, email, encryptedPassword, activationLink]
            );
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`);
        
        return getUserForResponceWithToken(user);
    }

    async activate(activationLink) {
        const user = await db.query('SELECT * FROM users where activationLink = $1', [activationLink]);
        
        if (!user.rows[0]) {
            throw ApiError.BadRequest(`Некорректная ссылка активации`);
        }

        await db.query('UPDATE users set isActivated = $1 where id = $2', [true, user.rows[0].id]);
    }

    async login(email, password) {
        const user = await db.query('SELECT * FROM users where email = $1', [email]);

        if (!user.rows[0]) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} не найден`);
        }

        const isPasswordEquals = await bcrypt.compare(password, user.rows[0].password);

        if (!isPasswordEquals) {
            throw ApiError.BadRequest(`Неверный пароль`);
        }

        return getUserForResponceWithToken(user);
    }

    async logout(refreshToken) {
        await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnAutorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const TokenFromDb = await tokenService.findToken(refreshToken);

        if(!userData || !TokenFromDb) {
            throw ApiError.UnAutorizedError();
        }

        const user = await db.query('SELECT * FROM users where id = $1', [userData.id]);

        return getUserForResponceWithToken(user);
    }

    async getAllUsers() {
        const users = await db.query('SELECT * FROM users');

        const usersDto = users.rows.map((user) => {
            const userDto = new UserDto(user);

            return {...userDto};
        }) 

        return usersDto;
    }

    async getOneUser(userId) {
        const user = await db.query('SELECT * FROM users where id = $1', [userId]);
        return user.rows[0];
    }

    async updateUser(name, password, oldPassword, userId) {
        const oldUser = await db.query('SELECT * FROM users where id = $1', [userId]);

        const isPasswordEquals = await bcrypt.compare(oldPassword, oldUser.rows[0].password);

        if (!isPasswordEquals) {
            throw ApiError.BadRequest(`Неверный пароль`);
        }

        const user = await db.query(
            'UPDATE users set name = $1, password = $2 where id = $3 RETURNING *', [name, password, userId]
        );
        
        return getUserForResponceWithToken(user);
    }

    async deleteUser(userId) {
        await db.query('DELETE FROM users where id = $1', [userId]);
    }
}

module.exports = new UserService();
