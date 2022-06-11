import { getCategoriesService } from '../services/categoryService.js';

export const getAllCategories = async (_request, response) => {
  const categories = await getCategoriesService();

  response.status(200).json({ categories });
};
