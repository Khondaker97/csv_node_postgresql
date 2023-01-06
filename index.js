const express = require("express");
const cors = require("cors");
require("dotenv").config();
//routes
const moviesRoute = require("./routes/movies");

//cors configuaration
const corsOptionsDelegate = {
  origin: ["http://localhost:3000", "*"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
const app = express();
//middleware
app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//PORT
const PORT = process.env.PORT || 5000;
//TESTING
app.get("/", (_, res) => {
  res.send("TESTING SUCCESSFUL!");
});
//route
app.use("/api/v1", moviesRoute);
//server
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
