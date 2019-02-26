const { Client } = require('pg');

/* local */
const connection = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'twitchchat',
  password: 'fish22',
  port: 5432,
});

/* EC2 */
// const connection = new Client({
//   user: process.env.PSQL_USERNAME,
//   host: process.env.PSQL_HOSTNAME,
//   database: process.env.PSQL_DB_NAME,
//   password: process.env.PSQL_PASSWORD,
//   port: process.env.PSQL_PORT,
// });
connection.connect();

module.exports.connection = connection;