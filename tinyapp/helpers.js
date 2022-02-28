const bcrypt = require("bcrypt");
const saltRounds = 10;

const urlsForUser = (urlDatabase, userId) => {
  let newUserUrlDatabase = {};
  const urlDatabaseValues = Object.entries(urlDatabase);
  for (let id of urlDatabaseValues) {
    if (id[1].userId === userId) {
      newUserUrlDatabase[id[0]] = id[1];
    }
  }
  return newUserUrlDatabase;
};

const generateRandomString = () => {
  let result = Math.random().toString(36).substring(2, 8);
  return result;
};

const addNewUser = (users, email, password) => {
  // generate an id
  const userId = generateRandomString();
  // create a new user object
  const newUser = {
    id: userId,
    email,
    password: bcrypt.hashSync(password, saltRounds),
  };
  users[userId] = newUser;

  return userId;
};

const authenticateUser = (users, email, password) => {
  // Does the user with that email exist?
  const user = findTheUserByEmail(email, users);

  // check the email and passord match
  if (user.email === email && bcrypt.compareSync(password, user.password)) {
    return user;
  } else {
    return false;
  }
};

const findTheUserByEmail = (email, users) => {
  for (let userId in users) {
    if (users[userId].email === email) {
      return users[userId];
    }
  }
  return false;
};

module.exports = {
  generateRandomString,
  urlsForUser,
  findTheUserByEmail,
  addNewUser,
  authenticateUser,
};
