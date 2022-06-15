const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());

const users = {
  gkhutwad: {
    role: "teacher",
    options: [
      { id: "score", title: "Score" },
      { id: "students", title: "Add/Update Students" },
      { id: "events", title: "Events" },
      { id: "library", title: "Library" },
    ],
  },
  rutuja: {
    role: "student",
    options: [
      { id: "score", title: "Score" },
      { id: "events", title: "Events" },
      { id: "library", title: "Library" },
    ],
  },
  john: {
    role: "admin",
    options: [
      { id: "score", title: "Score" },
      { id: "students", title: "Add/Update Students" },
      { id: "teachers", title: "Add/Update Teachers" },
      { id: "events", title: "Events" },
      { id: "library", title: "Library" },
    ],
  },
};
app.post("/login", (req, res) => {
  console.log("req body ==>", req.body);
  const username = req.body.username;
  const userConfig = { ...users[username], token: "abc" };

  res.send(userConfig);
});

app.listen("5000", () => {
  console.log("server listening on port 5000");
});
