const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const pool = require("./config/dbconn");

function readStream(fileName) {
  const stream = fs.createReadStream(path.resolve(__dirname, "data", fileName));
  return stream;
}

pool.connect();
const csvStream = csv
  .parseStream(readStream("movies.csv"), { headers: true })
  .on("error", (error) => console.error(error))
  .on("data", (record) => {
    csvStream.pause();
    const tconst = record.tconst;
    const titleType = record.titleType;
    const primaryTitle = record.primaryTitle;
    const runtimeMinutes = record.runtimeMinutes;
    const genres = record.genres;
    pool.query(
      "INSERT INTO movies(tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES($1, $2, $3, $4, $5)",
      [tconst, titleType, primaryTitle, runtimeMinutes, genres],
      (err) => {
        if (err) console.log(err.message);
      }
    );
    csvStream.resume();
  })
  .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));

const csvStream2 = csv
  .parseStream(readStream("ratings.csv"), { headers: true })
  .on("error", (error) => console.error(error))
  .on("data", (record) => {
    csvStream2.pause();
    const tconst = record.tconst;
    const averageRating = record.averageRating;
    const numVotes = record.numVotes;
    pool.query(
      "INSERT INTO ratings(tconst, averageRating, numVotes) VALUES($1, $2, $3)",
      [tconst, averageRating, numVotes],
      (err) => {
        if (err) console.log(err.message);
      }
    );
    csvStream2.resume();
  })
  .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
