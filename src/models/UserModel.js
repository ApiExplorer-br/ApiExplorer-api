import { connection } from '../db/index.js';

export const getById = async (id) => {
  const [user] = await connection.execute(`SELECT * FROM users WHERE id = ?`, [
    id,
  ]);
  return user;
};

export const getByUrlGithub = async (urlGithub) => {
  const [user] = await connection.execute(
    `SELECT * FROM users WHERE url_github = ?`,
    [urlGithub]
  );
  return user;
};

export const getUserById = async (id) => {
  const [user] = await connection.execute(`SELECT * FROM users WHERE id = ?`, [
    id,
  ]);
  return user;
};

export const getAllUsersModel = async () => {
  const [users] = await connection.execute(`SELECT * FROM users`);
  return users;
};

export const createUserModel = async ({
  id,
  name,
  email,
  url_github,
  profile,
  bio,
}) => {
  await connection.execute(
    `INSERT INTO users (id, name, email, url_github, profile, bio) VALUES (?, ?, ?, ?, ?, ?)`,
    [id, name, email, url_github, profile, bio]
  );

  return {
    id,
    name,
    email,
    url_github,
    profile,
    bio,
  };
};

export const editProfileModel = async (id, name, bio) => {
  await connection.execute(`UPDATE users SET name = ?, bio = ? WHERE id = ?`, [
    name,
    bio,
    id,
  ]);
};

export const deleteUserModel = async (id) => {
  await connection.execute(`DELETE FROM users WHERE id = ?`, [id]);
};
