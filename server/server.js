const express = require('express');
const bodyParser = require('body-parser');
const server = express();

var UserRouter = require('./routes/user.router');
var LoginRouter = require('./routes/login.router');
var LogMiddleware = require('./middleware/log');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(LogMiddleware);

server.use(UserRouter);
server.use(LoginRouter);

server.listen(3030, () => {
    console.log('Servidor rodando na porta: 3030')
});