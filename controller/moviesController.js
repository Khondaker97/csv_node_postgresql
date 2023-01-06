const pool = require("../config/dbconn");

//get movies based on longest duration
const getLongestDuration = async (_, res) => {
  try {
    const client = await pool.connect();
    const getLongest = await client.query(
      "SELECT * from movies ORDER BY runtimeMinutes DESC LIMIT 10"
    );
    res.status(200).send({
      counts: getLongest.rowCount,
      results: getLongest.rows,
    });
    client.release(true);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
//Create a new record for movie
const createMovie = async (req, res) => {
  const { tconst, titleType, primaryTitle, runtimeMinutes, genres } = req.body;

  try {
    const client = await pool.connect();
    const found = await client.query(
      "SELECT tconst FROM movies WHERE tconst =$1",
      [tconst]
    );
    if (found.rows.length > 0) {
      res.status(409).send({ error: "movie already exists" });
      return;
    }
    await client.query(
      "INSERT INTO movies(tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES($1, $2, $3, $4, $5)",
      [tconst, titleType, primaryTitle, runtimeMinutes, genres]
    );
    res.status(201).send({
      results: "success",
    });
    client.release(true);
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
///api/v1/top-rated-movies

const getTopMOVIES = async (_, res) => {
  try {
    const client = await pool.connect();
    const getTop = await client.query(
      "SELECT m.tconst, primaryTitle,genres, averageRating From movies as m \
    INNER JOIN ratings ON m.tconst = ratings.tconst \
    WHERE averageRating > 6.0 ORDER BY averageRating DESC"
    );
    res.status(200).send({
      counts: getTop.rowCount,
      results: getTop.rows,
    });
    client.release(true);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const getAll = async (_, res) => {
  try {
    const client = await pool.connect();
    const getLongest = await client.query("SELECT * from movies");
    res.status(200).send({
      counts: getLongest.rowCount,
      results: getLongest.rows,
    });
    client.release(true);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = { getLongestDuration, createMovie, getTopMOVIES, getAll };
