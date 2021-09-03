const { verify } = require('jsonwebtoken');
const secret = require('../config/auth.config');

const secretAuth = (req, res, next) => {
    try {
        let token = req.headers.authorization.reaplace("Bearer", "");
        let validToken = verify(token, secret);
        req('tokenData') = validToken;
        next();
    } catch (error) {
        req.status(401).json('Não autorizado!')
    };
};

module.exports = secretAuth;