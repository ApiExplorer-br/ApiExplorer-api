import { connection } from '../db/index.js';

export const getApiRatingById = async (id) => {
  const [rating] = await connection.execute(
    `SELECT * FROM rating WHERE api_id = ?`,
    [id]
  );
  return rating;
};

export const getRatingById = async (id) => {
  const [rating] = await connection.execute(
    `SELECT * FROM rating WHERE id = ?`,
    [id]
  );
  return rating;
};

export const createRatingModel = async (
  id,
  api_id,
  rating,
  message,
  userId,
  name
) => {
  const result = await connection.query(
    `INSERT INTO rating (id, api_id, rating, message, user_id, user_name) VALUES (?, ?, ?, ?, ?, ?)`,
    [id, api_id, rating, message, userId, name]
  );
  return result;
};

export const editRatingModel = async (
  id,
  api_id,
  rating,
  message,
  userId,
  name
) => {
  console.log(id, api_id, rating, message, userId, name);
  const result = await connection.query(
    `UPDATE rating SET rating = ?, message = ?, user_id = ?, user_name = ? WHERE id = ? AND api_id = ?`,
    [rating, message, userId, name, id, api_id]
  );
  return result;
};
