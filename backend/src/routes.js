const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Eae Marlon" });
});

module.exports = routes;
