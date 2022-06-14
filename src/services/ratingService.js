import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createRatingModel,
  editRatingModel,
  getRatingById,
  deleteRatingModel,
} from '../models/RatingModel.js';

export const createRatingService = async (
  userId,
  api_id,
  rating,
  message,
  name
) => {
  const isRatingValid = rating >= 1 && rating <= 5;
  if (!isRatingValid) throw new AppError('Rating must be between 1 and 5', 400);
  await createRatingModel(uuidv4(), api_id, rating, message, userId, name);
  return { message: 'Rating created successfully' };
};

export const editRatingService = async (
  id,
  api_id,
  rating,
  message,
  userId,
  name
) => {
  const ratingExists = await getRatingById(id);

  if (!ratingExists.length) throw new AppError('Rating not found', 404);

  const isRatingValid = rating >= 1 && rating <= 5;
  if (!isRatingValid) throw new AppError('Rating must be between 1 and 5', 400);

  const updateRating = await editRatingModel(
    id,
    api_id,
    rating,
    message,
    userId,
    name
  );
  return updateRating;
};

export const deleteRatingService = async (id) => {
  const ratingExists = await getRatingById(id);

  if (!ratingExists.length) throw new AppError('Rating not found', 404);

  await deleteRatingModel(id);
};
