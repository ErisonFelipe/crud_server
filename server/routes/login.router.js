const express = require('express');
const LoginController = require('../controllers/login.controller');
const router = express();

router.get('/login', (req, res)=>{
    res.send("Página de login")
});
router.post('/login', LoginController.login);

module.exports = router;