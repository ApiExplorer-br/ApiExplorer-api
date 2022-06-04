import { connection } from '../db/index.js';

export const getApiByUrl = async (url) => {
  const [api] = await connection.execute(
    `SELECT * FROM apis WHERE url_repo = ?`,
    [url]
  );
  return api;
};
export const createApiModel = async (
  name,
  url_repo,
  technologies,
  category,
  description,
  rating,
  user_id
) => {
  await connection.query(
    `INSERT INTO apis (name, url_repo, technologies, category, description, rating, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, url_repo, technologies, category, description, rating, user_id]
  );
};
