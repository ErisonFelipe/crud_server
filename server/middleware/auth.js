const { sign } = require('jsonwebtoken');
const secret = require('../config/auth.config');

const auth = (req, res, next) => {
    let { email } = req.body;
    let token = sign({ email }, secret, { expiresIn: 10800});
    res.json({token: token})
    next();
};

module.exports = auth;