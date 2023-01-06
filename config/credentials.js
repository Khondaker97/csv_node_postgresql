const { PGPASSWORD } = process.env;
const credentials = {
  host: process.env.PGHOST || "localhost",
  user: process.env.PGUSER || "postgres",
  database: process.env.PGDATABASE || "onito",
  password: PGPASSWORD,
  port: process.env.PGPORT || "5432",
};
module.exports = credentials;
