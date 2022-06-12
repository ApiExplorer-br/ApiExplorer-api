import { connection } from '../db/index.js';

export const getByEmail = async (email) => {
  const [user] = await connection.execute(
    `SELECT * FROM users WHERE email = ?`,
    [email]
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

export const deleteUserModel = async (id) => {
  await connection.execute(`DELETE FROM users WHERE id = ?`, [id]);
};
