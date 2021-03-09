const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
const wrapUrl = require("../model/wrapUrl");
const ev = require("dotenv").config();

const app = express();
const router = express.Router();

const BASE_URL = "https://wrapit.herokuapp.com/";

router.route("/:hash").get((req, res) => {
  const urlCode = req.params.hash;
  console.log(urlCode);
  wrapUrl.findOne({ urlCode }).then((item) => {
    if (item) {
      return res.redirect(item.full);
    } else {
      return res.status(401).send("No such url");
    }
  });
});

// Get all urls
router.route("/").get((req, res) => {
  wrapUrl.find().then((items) => {
    return res.json(items);
  });
});

// Generate Url
router.route("/").post((req, res) => {
  const { full } = req.body;

  console.log(full);
  if (validUrl.isUri(full)) {
    const urlCode = shortid.generate();
    const wrap = `${BASE_URL}${urlCode}`;
    const item = new wrapUrl({
      full,
      wrap,
      urlCode,
    });
    item
      .save()
      .then((item) => {
        return res.json(item);
      })
      .catch((err) => {
        return res.status(400).send("unable to save to database");
      });
  } else {
    return res.json("Invalid Url");
  }
});

module.exports = router;
