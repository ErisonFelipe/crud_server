const express = require('express');
const server = express();

var UserRouter = require('./routes/user.router');
var LoginRouter = require('./routes/login.router');

server.use(UserRouter);
server.use(LoginRouter);

server.listen(3030, () => {
    console.log('Servidor rodando na porta: 3030')
});