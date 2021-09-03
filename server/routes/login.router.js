const express = require('express');
const LoginController = require('../controllers/login.controller');
const Auth = require('../middleware/auth');
const router = express();

router.get('/login', (req, res)=>{
    res.send("Página de login")
});
router.post('/login', Auth, LoginController.login);

module.exports = router;