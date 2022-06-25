import { connection } from '../db/index.js';

export const getAllApiModel = async () => {
  const [apis] = await connection.execute(`SELECT * FROM apis`);
  return apis;
};
export const getApisByUserModel = async (userId) => {
  const [apis] = await connection.execute(
    `SELECT * FROM apis WHERE user_id = ?`,
    [userId]
  );
  return apis;
};

export const getApiByIdModel = async (id) => {
  const [api] = await connection.execute(`SELECT * FROM apis WHERE id = ?`, [
    id,
  ]);
  return api;
};

export const getApiByUrl = async (url) => {
  const [api] = await connection.execute(
    `SELECT * FROM apis WHERE url_repo = ?`,
    [url]
  );
  return api;
};

export const createApiModel = async (
  id,
  name,
  url_repo,
  technologies,
  category,
  description,
  rating,
  user_id
) => {
  await connection.query(
    `INSERT INTO apis (id, name, url_repo, technologies, category, description, rating, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, name, url_repo, technologies, category, description, rating, user_id]
  );
};

export const editApiModel = async (id, category, description) => {
  await connection.execute(
    `UPDATE apis SET category = ?, description = ? WHERE id = ?`,
    [category, description, id]
  );
};

export const deleteApiModel = async (id) => {
  await connection.execute(`DELETE FROM apis WHERE id = ?`, [id]);
};
