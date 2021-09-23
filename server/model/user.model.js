const { Sequelize } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  password: {
    type: Sequelize.STRING
  },
  dateNascimento: {
    type: Sequelize.DATE
  },
  phone: {
    type: Sequelize.INTEGER
  }
}, {
  // Other model options go here
});

// User.sync({ force: true });

module.exports = User;