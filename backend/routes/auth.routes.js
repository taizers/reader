const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller');

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/signUp', authController.signUp);

module.exports = router;