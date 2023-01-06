const { Client, Pool } = require("pg");
const credentials = require("./credentials");

const config = {
  connectionString: credentials.connconnectionString,
  host: credentials.host,
  user: credentials.user,
  database: credentials.database,
  password: credentials.password,
  port: credentials.port,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
};
// const client = new Client(config);
const pool = new Pool(config);

pool.on("error", (err, client) => {
  console.error("idle client error", err.message, err.stack);
});
module.exports = pool;
