import { getAllCategoriesModel } from '../models/Categories.js';

export const getCategoriesService = async () => {
    const categories = await getAllCategoriesModel();
    categories.sort((a, b) => a.name.localeCompare(b.name));
    return categories;
}
