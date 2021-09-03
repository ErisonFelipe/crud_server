const express = require('express');
const LoginController = require('../controllers/login.controller');
const Auth = require('../middleware/auth');
const secretAuth = require('../middleware/secretAuth');
const router = express();

router.get('/login', (req, res)=>{
    res.send("Página de login")
});
router.post('/login', Auth, LoginController.login);
router.get('/login/token', secretAuth, LoginController.token);

module.exports = router;