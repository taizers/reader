require('dotenv').config();

const express = require('express');
const authRouter = require('./routes/auth.routes');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRouter);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();