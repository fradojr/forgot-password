const express = require('express');

const router = express.Router();
const controllers = require('../controllers/index');
const { authMiddleware } = require('../middlewares/auth.js');

router.post('/login', [], controllers.usersController.login);
router.put('/profile', [ authMiddleware ], controllers.usersController.updateProfile);
router.put('/forgot-password', [], controllers.usersController.forgotPassword);
router.get('/reset/:token', [], controllers.usersController.reset);
router.post('/reset/:token', [], controllers.usersController.resetPassword);

module.exports = {
  basePath: '/',
  router,
};
