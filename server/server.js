const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const wrapUrlRouter = require("./routes/wrapUrlRouter");

// App instance
const app = express();

// Server configuration
const BASE_PATH = "/";
const PORT = 6202;

// Connect to DB
const MONGO_URL = "mongodb://localhost:27017/smart-link";
const CONNECTION_OPTION = {
  useNewUrlParser: true,
  keepAlive: true,
};

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URL, CONNECTION_OPTION)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("DB connection error:", err.stack);
    process.exit(1);
  });

// app.use(express.static(public));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(BASE_PATH, wrapUrlRouter);

app.listen(PORT, () => {
  console.log("Express server running on: ", PORT);
});
