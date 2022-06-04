import { connection } from '../db/index.js';

export const getAllApiModel = async () => {
  const [apis] = await connection.execute(`SELECT * FROM apis`);
  return apis;
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
