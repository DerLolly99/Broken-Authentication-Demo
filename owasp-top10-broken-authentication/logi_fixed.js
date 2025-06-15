'use strict';

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// dummy-database with hashed passwords
const users = {
  alice: {
    username: "alice",
    // password: "password123"
    passwordHash: "$2a$12$B5G2JwbNOyR/ADhzBDK5ce7B7cPvSBlQU1RjZ04MQRQ9tf6OQxwAa"
  },
  bob: {
    username: "bob",
    // password: "qwerty"
    passwordHash: "$2a$12$iNOCD6egXxPIFRN40dpQJeZVczghIqP8V3Ym0hXsqU06c9w7siV3O"
  }
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: "supersecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 15 * 60 * 1000
  }
}));

app.get("/", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <label>Username: <input name="username" /></label><br/>
      <label>Password: <input type="password" name="password" /></label><br/>
      <button>Login</button>
    </form>
  `);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (!user) {
    return res.status(401).send("Invalid username or password.");
  }
  
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) {
    return res.status(401).send("Invalid username or password.");
  }

  req.session.user = username;
  res.redirect("/secret");
});

app.get("/secret", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Access denied. Please login first.");
  }

  res.send(`
    <h1>Willkommen ${req.session.user}!</h1>
    <p>Dies ist ein geschützter Bereich.</p>
    <form action="/logout" method="POST"><button>Logout</button></form>
  `);
});

app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send("Logout failed");
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});