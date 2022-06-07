import { connection } from '../db/index.js';

export const getByEmail = async (email) => {
  const [user] = await connection.execute(
    `SELECT * FROM users WHERE email = ?`,
    [email]
  );
  return user;
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
