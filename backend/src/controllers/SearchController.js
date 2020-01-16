const axios = require("axios");
const Dev = require("../models/Dev");

const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    console.log(req.query);
    return res.json({ message: "Ok" });
  }
};
