import { connection } from '../db/index.js';

export const getFrontRatingById = async (id) => {
  const [rating] = await connection.execute(
    `SELECT * FROM ratingsFront WHERE front_id = ?`,
    [id]
  );
  return rating;
};

export const getFrontRatingByUser = async (front_id, user_id) => {
  const [rating] = await connection.execute(
    `SELECT * FROM ratingsFront WHERE front_id = ? AND user_id = ?`,
    [front_id, user_id]
  );
  return rating;
};

export const getRatingById = async (id) => {
  const [rating] = await connection.execute(
    `SELECT * FROM ratingsFront WHERE id = ?`,
    [id]
  );
  return rating;
};

export const createRatingModel = async (
  id,
  front_id,
  rating,
  message,
  userId,
  name
) => {
  const result = await connection.query(
    `INSERT INTO ratingsFront (id, front_id, rating, message, user_id, user_name) VALUES (?, ?, ?, ?, ?, ?)`,
    [id, front_id, rating, message, userId, name]
  );
  return result;
};

export const editRatingModel = async (id, rating, message) => {
  const result = await connection.query(
    `UPDATE ratingsFront SET rating = ?, message = ? WHERE id = ?`,
    [rating, message, id]
  );
  return result;
};

export const deleteRatingModel = async (id) => {
  const result = await connection.query(
    `DELETE FROM ratingsFront WHERE id = ?`,
    [id]
  );
  return result;
};
