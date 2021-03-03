const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname, "dist")));
//app.get("/", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "dist/index.html"));
//});

app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('dist/index.html', { root: __dirname });
});

module.exports = app;
