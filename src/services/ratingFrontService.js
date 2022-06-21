import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createRatingModel,
  editRatingModel,
  getRatingById,
  deleteRatingModel,
  getFrontRatingById,
  getFrontRatingByUser,
} from '../models/RatingFrontModel.js';

import { getFrontByIdService } from './frontService.js';

export const getEvaluationsByFrontService = async (id) => {
  const frontExists = await getFrontByIdService(id);

  if (!frontExists) throw new AppError('Front não encontrado!');

  const evaluations = await getFrontRatingById(id);

  return evaluations;
};
export const createRatingService = async (
  userId,
  front_id,
  rating,
  message,
  name
) => {
  const isRatingValid = rating >= 1 && rating <= 5;
  if (!isRatingValid) throw new AppError('Nota entre 1 e 5', 400);

  const ratingExists = await getFrontRatingByUser(front_id, userId);

  if (ratingExists.length) {
    await editRatingModel(ratingExists[0].id, rating, message);
    return { message: 'Avaliação atualizada!' };
  }

  await createRatingModel(uuidv4(), front_id, rating, message, userId, name);
  return { message: 'Avaliação adicionada!' };
};

export const editRatingService = async (id, rating, message) => {
  const ratingExists = await getRatingById(id);

  if (!ratingExists.length) throw new AppError('Front não encontrado!', 404);

  const isRatingValid = rating >= 1 && rating <= 5;
  if (!isRatingValid) throw new AppError('Nota entre 1 e 5!', 400);

  const updateRating = await editRatingModel(id, rating, message);
  return updateRating;
};

export const deleteRatingService = async (id) => {
  const ratingExists = await getRatingById(id);

  if (!ratingExists.length) throw new AppError('Avaliação não encontrada', 404);

  await deleteRatingModel(id);
};
