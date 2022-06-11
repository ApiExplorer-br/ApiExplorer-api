import { v4 as uuidv4 } from 'uuid';
import { createRatingModel } from '../models/RatingModel.js';

export const createRatingService = async (userId, api_id, rating, message, name) => {
    await createRatingModel(uuidv4(), api_id, rating, message, userId, name);
    return { message: 'Rating created successfully' };
}