const { PGPASSWORD } = process.env;
const credentials = {
  connconnectionString: process.env.DATABASE_URL,
  host: process.env.PGHOST || "localhost",
  user: process.env.PGUSER || "postgres",
  database: process.env.PGDATABASE || "onito",
  password: PGPASSWORD,
  port: process.env.PGPORT || "5432",
};
module.exports = credentials;
