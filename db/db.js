// const Sequelize = require('sequelize');
// const sampleUsers = require('./seedData.js');
//var pg = require('pg');
const { Client } = require('pg');

const connection = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'twitchchat',
  password: 'fish22',
  port: 5432,
});
connection.connect();

module.exports.connection = connection;

// const sequelize = new Sequelize('twitchchat', 'postgres', 'fish22', {
//   host: 'localhost',
//   dialect: 'postgres',
//   operatorsAliases: false,
//   define: {
//     timestamps: false
//   },

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// const User = sequelize.define('users', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//   },
//   username: {
//     type: Sequelize.STRING
//   },
//   twitch_sub: {
//     type: Sequelize.BOOLEAN
//   },
//   mod_status: {
//     type: Sequelize.BOOLEAN
//   },
//   color: {
//     type: Sequelize.STRING
//   }
// });

// User.bulkCreate(sampleUsers()).then(() => {
//   return User.findAll();
// }).then(users => {
//   console.log(users)
// });