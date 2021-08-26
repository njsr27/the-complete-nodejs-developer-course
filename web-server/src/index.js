const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));
// app.get("/about", (req, res) => {
//   res.sendFile(__dirname + "/public/about.html");
// });
//
// app.get("/help", (req, res) => {
//   res.sendFile(__dirname + "/public/help.html");
// });

app.listen(3000, () => {
  console.log("Server up and running on port 3000.");
});