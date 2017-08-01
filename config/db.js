var mysql = require('mysql2');
var Sequelize = require('sequelize');
var env = require('../config/env');

var sequelize = new Sequelize(env.db.database, env.db.user, env.db.password, {
    host: env.db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false, // true by default
        dateStrings:true
    },
    logging: true,
    dateStrings:true
});
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
module.exports = sequelize;