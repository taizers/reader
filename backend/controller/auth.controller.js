const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    async login(req, res) {
        try {
            const {email, password} = req.body;

            if (!(email && password)) {
                return res.status(400).send("All input is required");
            }

            const userData = await db.query('SELECT * FROM users where email = $1', [email]);

            const user = userData.rows[0];

            if (!user) {
                return res.status(404).send('User not exist');
            }

            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                );

                user.token = token;
                user.password = null;

                 res.status(200).json(user);
            } else {
                res.status(400).send('Invalid password');
            }

        } catch (error) {
            console.log(error);
        }

    }

    async logout(req, res) {
        const users = await db.query('SELECT * FROM users');
        res.json(users.rows);
    }

    async signUp(req, res) {
        try {
            const { name, email, password } = req.body;

            if (!(email && password && name)) {
                return res.status(400).send("All input is required");
            }

            const oldUser = await db.query('SELECT * FROM users where email = $1', [email]);

            if (oldUser.rows[0]) {
                console.log('ffffffffffffffffff');
                return res.status(409).send("User Already Exist. Please Login");
            }

            const encryptedPassword = await bcrypt.hash(password, 10);

            const newPerson = await db.query(
                'INSERT INTO users (name, email, password) values ($1, $2, $3) RETURNING *', [name, email, encryptedPassword]
                );

            const user = newPerson.rows[0];

            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
                );
            user.token = token;
            user.password = null;

            res.status(201).send('Created');

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserController(); 