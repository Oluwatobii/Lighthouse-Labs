const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "lightbnb",
});

pool.connect();

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return pool
    .query(
      `
  SELECT * FROM users
  WHERE email = $1
  `,
      [email]
    )
    .then((res) => res.rows[0])
    .catch((err) => console.error("query error", err.stack));
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return pool
    .query(
      `
  SELECT * FROM users
  WHERE id = $1
  `,
      [id]
    )
    .then((res) => res.rows[0])
    .catch((err) => console.error("query error", err.stack));
};
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  return pool
    .query(
      `
  INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *;
  `,
      [user.name, user.email, user.password]
    )
    .then((res) => res.rows[0])
    .catch((err) => console.error("query error", err.stack));
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return pool
    .query(
      `
      SELECT properties.id AS id, properties.title AS title, properties.cost_per_night AS cost_per_night, reservations.start_date AS start_date, AVG(rating) AS average_rating
      FROM reservations
        JOIN properties ON reservations.property_id = properties.id
        JOIN property_reviews ON properties.id = property_reviews.property_id
      WHERE reservations.guest_id = $1
        AND reservations.end_date < now()
      ::date
      GROUP BY properties.id, reservations.id
      ORDER BY reservations.start_date
      LIMIT $2;`,
      [guest_id, limit]
    )
    .then((res) => res.rows)
    .catch((err) => console.error("query error", err.stack));
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = function (options, limit = 10) {
  let queryParams = [];
  let queryString = `SELECT properties.*, AVG(rating) as average_rating
  FROM properties
  JOIN property_reviews 
  ON property_reviews.property_id = properties.id
  `;

  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;

    if (options.owner_id) {
      queryParams.push(`${options.owner_id}`);
      queryString += ` AND owner_id = $${queryParams.length} `;
    }
  } else if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    queryString += `WHERE owner_id = $${queryParams.length} `;
  }
  queryString += `GROUP BY properties.id
  `;

  if (options.minimum_rating) {
    if (options.minimum_price_per_night) {
      if (options.maximum_price_per_night) {
        queryParams.push(options.minimum_rating);
        queryParams.push(options.minimum_price_per_night);
        queryParams.push(options.maximum_price_per_night);
        queryString += `HAVING AVG(rating) > $${
          queryParams.length - 2
        } AND cost_per_night > $${
          queryParams.length - 1
        } AND cost_per_night < $${queryParams.length}`;
      } else {
        queryParams.push(options.minimum_rating);
        queryParams.push(options.minimum_price_per_night);
        queryString += `HAVING AVG(rating) > $${
          queryParams.length - 1
        } AND cost_per_night > $${queryParams.length}`;
      }
    } else {
      queryParams.push(options.minimum_rating);
      queryString += `HAVING AVG(rating) > $${queryParams.length}`;
    }
  } else if (options.minimum_price_per_night) {
    if (options.maximum_price_per_night) {
      queryParams.push(options.minimum_price_per_night);
      queryParams.push(options.maximum_price_per_night);
      queryString += `HAVING cost_per_night > $${
        queryParams.length - 1
      } AND cost_per_night < $${queryParams.length}`;
    } else {
      queryParams.push(options.minimum_price_per_night);
      queryString += `HAVING cost_per_night > $${queryParams.length}`;
    }
  } else if (options.maximum_price_per_night) {
    queryString += `HAVING cost_per_night < $${queryParams.length}`;
  }

  queryParams.push(limit);
  queryString += `
  ORDER BY cost_per_night
  LIMIT $${queryParams.length}; 
  `;
  return pool.query(queryString, queryParams).then((res) => res.rows);
};
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  return pool
    .query(
      `
  INSERT INTO properties
  (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;
  `,
      [
        property.owner_id,
        property.title,
        property.description,
        property.thumbnail_photo_url,
        property.cover_photo_url,
        property.cost_per_night,
        property.parking_spaces,
        property.number_of_bathrooms,
        property.number_of_bedrooms,
        property.country,
        property.street,
        property.city,
        property.province,
        property.post_code,
      ]
    )
    .then((res) => res.rows)
    .catch((err) => console.error("query error", err.stack));
};
exports.addProperty = addProperty;
