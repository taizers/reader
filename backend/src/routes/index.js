const express = require('express');
const router = express.Router();

const authRouter = require('./auth.routes');
const usersRouter = require('./users.routes');
const booksRouter = require('./books.routes');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/books', booksRouter);

module.exports = router;
