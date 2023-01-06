const { PGPASSWORD } = process.env;
const credentials = {
  host: "localhost",
  user: "postgres",
  database: "onito",
  password: PGPASSWORD,
  port: "5432",
};
module.exports = credentials;
