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
  url_img,
  api_id,
  user_id
) => {
  await connection.execute(
    `INSERT INTO fronts (id, name, url_repo, technologies, category, description, url_deploy, url_img, api_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      name,
      url_repo,
      technologies,
      category,
      description,
      url_deploy,
      url_img,
      api_id,
      user_id,
    ]
  );
  return id;
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
    `SELECT A.category, F.*  FROM fronts AS F JOIN apis AS A ON A.id=F.api_id WHERE F.id = ?`,
    [id]
  );
  return front;
};

export const getFrontsByUserModel = async (userId) => {
  const [apis] = await connection.execute(
    `SELECT * FROM fronts WHERE user_id = ?`,
    [userId]
  );
  return apis;
};

export const addImageFrontModel = async (url_img, id) => {
  const [front] = await connection.execute(
    `UPDATE fronts SET url_img = ? WHERE id = ?`,
    [url_img, id]
  );

  return front;
};

export const editFrontModel = async (id, description, url_deploy) => {
  const [updatedFront] = await connection.execute(
    `UPDATE fronts SET description = ?, url_deploy = ? WHERE id = ?`,
    [description, url_deploy, id]
  );
  return updatedFront;
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
