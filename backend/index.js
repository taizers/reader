require('dotenv').config();

const express = require('express');
const authRouter = require('./routes/auth.routes');
const usersRouter = require('./routes/users.routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error.middleware');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use(errorMiddleware);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();
