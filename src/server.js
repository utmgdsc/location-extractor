const express = require("express");
const { extractLocation } = require("./controller/root");

const app = express();

app.get("/", (req, res) => {
  const location = extractLocation(req.headers);
  res.send(`Hello World from ${location}`);
});

app.listen(process.env.PORT, () =>
  console.log(`server listening on port ${process.env.PORT}!`)
);
