const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express();

router.get('/user', UserController.findAll);
router.get('/user/:id', UserController.findByPk);
router.post('/user', UserController.create);
router.put('user/:id', UserController.update);
router.delete('user/:id', UserController.delete);

module.exports = router;