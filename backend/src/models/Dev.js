const moongose = require("mongoose");

const DevSchema = new Mongoose.schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String]
});

module.exports = mongoose.model("Dev", DevSchema);
