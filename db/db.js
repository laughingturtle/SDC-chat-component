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