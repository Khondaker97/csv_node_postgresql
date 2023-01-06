const express = require("express");
const pool = require("../config/dbconn");

const route = express.Router();

route.get("/longest-duration-movies", async (req, res) => {
  try {
    const client = await pool.connect();
    res.status(200).send("longest-duration-movies");
    client.release(true);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = route;
