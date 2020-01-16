const { Router } = require("express");
const axios = require("axios");

const routes = Router();

routes.post("/devs", async (req, res) => {
  const { github_username } = req.body;

  const response = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  const { name = login, avatar_url, bio } = response.data;

  console.log(name, avatar_url, bio);
  return res.json({ message: "Eae Marlon" });
});

module.exports = routes;
