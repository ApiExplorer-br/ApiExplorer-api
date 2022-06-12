import {
  createRatingService,
  editRatingService,
} from '../services/ratingService.js';

export const createRating = async (request, response) => {
  const { rating, message, api_id } = request.body;
  const { id: userId, name } = request.user;

  const insertRating = await createRatingService(
    userId,
    api_id,
    rating,
    message,
    name
  );
  return response.status(201).send(insertRating);
};

export const editRating = async (request, response) => {
  const { rating, message, api_id } = request.body;
  const { id: userId, name } = request.user;
  const { id } = request.params;
  const updateRating = await editRatingService(
    id,
    api_id,
    rating,
    message,
    userId,
    name
  );
  return response.status(201).send(updateRating);
};