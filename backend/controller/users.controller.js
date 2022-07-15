const userService = require('../service/user.service');

class UsersController {
    async getAllUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();

            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    async getUser(req, res, next) {
        try {
            const id = req.params.id;

            const user = await userService.getOneUser(id);

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const {id, name, password, oldPassword} = req.body;

            const user = await userService.updateUser(name, password, oldPassword, id);

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const id = req.params.id;

            await userService.deleteUser(id);
            
            res.status(200);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UsersController(); 
