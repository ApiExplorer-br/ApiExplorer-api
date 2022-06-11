import { connection } from '../db/index.js';

export const getAllCategoriesModel = async () => {
  const [categories] = await connection.execute(`SELECT * FROM categories`);
  return categories;
};
