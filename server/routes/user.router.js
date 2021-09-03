const express = require('express');
const UserController = require('../controllers/user.controller');
const secretAuth = require('../middleware/secretAuth');
const router = express();

router.get('/user', secretAuth, UserController.findAll);
router.get('/user/:id', secretAuth, UserController.findByPk);
router.post('/user', UserController.create);
router.put('user/:id', UserController.update);
router.delete('user/:id', UserController.delete);

module.exports = router;