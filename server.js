const express = require("express");
const app = express();

app.use(express.static(__dirname));

var messages = [
  { name: "Tim", message: "Hi Jane, how are you?" },
  { name: "Jane", message: "I am really fine! How are you?" },
];

app.get("/messages", (req, res) => {
  res.send(messages);
});

const server = app.listen(3000, () => {
  console.log("server is listening on port ", server.address().port);
});
