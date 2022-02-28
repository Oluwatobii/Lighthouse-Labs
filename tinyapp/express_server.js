//Creating The Web Server with Express

const express = require("express");
const app = express();
const PORT = 8080;

const cookieSession = require("cookie-session");

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

//Functions required

const {
  generateRandomString,
  urlsForUser,
  findTheUserByEmail,
  addNewUser,
  authenticateUser,
} = require("./helpers");

//Constants(varibles) required

const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: bcrypt.hashSync("purple-monkey-dinosaur", saltRounds),
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: bcrypt.hashSync("dishwasher-funk", saltRounds),
  },
};

const urlDatabase = {
  b2xVn2: { longURL: "http://www.lighthouselabs.ca", userId: "userRandomID" },
  "9sm5xK": { longURL: "http://www.google.com", userId: "user2RandomID" },
};

//Creating Routes

//route to /(homepage)
//redirects to urls index
app.get("/", (req, res) => {
  res.redirect(`/urls`);
});

//POST method for creating a new URL
app.post("/urls", (req, res) => {
  const newShortURL = generateRandomString();
  const newLongURL = req.body.longURL;
  const userID = req.session.user_id;
  urlDatabase[newShortURL] = { longURL: newLongURL, userId: userID };
  res.redirect(`/urls/${newShortURL}`);
});

//POST method for deleting an existing short URL
app.post("/urls/:shortURL/delete", (req, res) => {
  if (urlDatabase[req.params.shortURL].userId === req.session.user_id) {
    delete urlDatabase[req.params.shortURL];
    res.redirect(`/urls`);
  }
});

//POST method for upadting an existing short URL
app.post("/urls/:shortURL/update", (req, res) => {
  if (urlDatabase[req.params.shortURL].userId === req.session.user_id) {
    let newLongURL = req.body.longURL;
    urlDatabase[req.params.shortURL].longURL = newLongURL;
    res.redirect(`/urls/${req.params.shortURL}`);
  }
});

//GET Login page
app.get("/login", (req, res) => {
  const templateVars = { email: "" };

  res.render("urls_login", templateVars);
});

//POST method for logging in
app.post("/login", (req, res) => {
  // Extract the user info from the request body
  const { email, password } = req.body;

  // Authenticating the user
  const user = findTheUserByEmail(email, users);

  let userID = req.session.user_id;

  if (email === "" || password === "") {
    res
      .status(403)
      .send(
        "Invalid email or password, Kindly re-enter in your credientials and try again."
      );
  }

  if (user) {
    const userCheck = authenticateUser(users, email, password);

    if (userCheck) {
      req.session.user_id = user.id;
      res.redirect("/urls");
    } else {
      res.status(403).send("Your password is incorrect, please try again.");
    }
  } else {
    res
      .status(403)
      .send(
        "This email adress is not an existing user in our database. Kindly register to use our cool features"
      );
  }
});

//POST method for logging out
app.post("/logout", (req, res) => {
  req.session.user_id = null;
  res.redirect(`/urls`);
});

//Route for /urls
//Renders calls urls_index page
app.get("/urls", (req, res) => {
  if (!users[req.session.user_id]) {
    res.redirect("/login");
  } else {
    const newDatabase = urlsForUser(urlDatabase, req.session.user_id);
    const templateVars = {
      urls: newDatabase,
      email: users[req.session.user_id].email,
    };
    res.render("urls_index", templateVars);
  }
});

//GET short url link, redirect to the corresponding long URL
app.get("/u/:shortURL", (req, res) => {
  if (!urlDatabase[req.params.shortURL]) {
    res.status(400).send("Short Link does not exist");
  } else {
    res.redirect(urlDatabase[req.params.shortURL].longURL);
  }
});

//GET create new URL page
app.get("/urls/new", (req, res) => {
  if (!users[req.session.user_id]) {
    res.redirect("/login");
  } else {
    const newDatabase = urlsForUser(
      urlDatabase,
      users[req.session.user_id].user_id
    );
    const templateVars = {
      urls: newDatabase,
      email: users[req.session.user_id].email,
    };
    res.render("urls_new", templateVars);
  }
});

//GET Registration page
app.get("/register", (req, res) => {
  const templateVars = { email: "" };

  res.render("urls_registration", templateVars);
});

//POST method for registering a new user
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const userExistInDb = findTheUserByEmail(email, users);

  if (email === "" || password === "") {
    res
      .status(400)
      .send(
        "Email & Password needs to be filled out, please fill in these fields and try again."
      );
  }

  if (userExistInDb) {
    res
      .status(400)
      .send(
        "A user with this email already exists, please register with a different email"
      );
  } else {
    const userId = addNewUser(users, email, password);
    req.session.user_id = userId;
    res.redirect("/urls");
  }
});

//GET page for specific short URL
app.get("/urls/:shortURL", (req, res) => {
  const newDatabase = urlsForUser(urlDatabase, req.session.user_id);

  const shortURL = newDatabase[req.params.shortURL];

  if (!req.session.user_id) {
    res.status(403);
    res.send("Unauthorized!: You don't have permission to access this page");
  } else if (req.session.user_id && !shortURL) {
    res.status(403);
    res.send("Unauthorized!: You do not own this URL");
  } else {
    let user = users[req.session.user_id];
    const templateVars = {
      email: users[req.session.user_id].email,
      shortURL: req.params.shortURL,
      longURL: newDatabase[req.params.shortURL].longURL,
      user: user,
    };
    res.render("urls_show", templateVars);
  }
});

//Launch server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
