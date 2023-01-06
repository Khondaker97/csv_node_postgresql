const express = require("express");
const {
  getLongestDuration,
  createMovie,
  getAll,
  getTopMOVIES,
} = require("../controller/moviesController");

const route = express.Router();
//get all movies testing
route.get("/all-movies", getAll);
//get top 10
route.get("/longest-duration-movies", getLongestDuration);
//post a new movie
route.post("/new-movie", createMovie);
//get top rated movies
route.get("/top-rated-movies", getTopMOVIES);

module.exports = route;
