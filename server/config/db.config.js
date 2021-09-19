const Sequelize = require('sequelize');

const sequelize = new Sequelize('portifolio', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
  console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(()=>{
  console.log("Conexão não realizada!")
});

module.exports = sequelize;