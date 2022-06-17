import { connection } from '../db/index.js';

export const getAllFrontModel = async () => {
  const [fronts] = await connection.execute(`SELECT * FROM fronts`);
  return fronts;
};

export const createFrontModel = async (
  id,
  name,
  url_repo,
  technologies,
  category,
  description,
  url_deploy,
  api_id,
  user_id
) => {
  const front = await connection.execute(
    `INSERT INTO fronts (id, name, url_repo, technologies, category, description, url_deploy, api_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      name,
      url_repo,
      technologies,
      category,
      description,
      url_deploy,
      api_id,
      user_id,
    ]
  );
  return front;
};

export const getFrontByUrlModel = async (url) => {
  const [front] = await connection.execute(
    `SELECT * FROM fronts WHERE url_repo = ?`,
    [url]
  );
  return front;
};

export const getFrontByIdModel = async (id) => {
  const [front] = await connection.execute(
    `SELECT * FROM fronts WHERE id = ?`,
    [id]
  );
  return front;
};

export const editFrontModel = async (id, name, description, url_deploy) => {
  await connection.execute(
    `UPDATE fronts SET name = ?, description = ?, url_deploy = ? WHERE id = ?`,
    [name, description, url_deploy, id]
  );
};

export const deleteFrontModel = async (id) => {
  await connection.execute(`DELETE FROM fronts WHERE id = ?`, [id]);
};

export const getFrontByApiIdModel = async (api_id) => {
  const [front] = await connection.execute(
    `SELECT * FROM fronts WHERE api_id = ?`,
    [api_id]
  );
  return front;
};
