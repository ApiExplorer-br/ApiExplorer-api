import {
  createRatingService,
  editRatingService,
  deleteRatingService,
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
  await editRatingService(id, api_id, rating, message, userId, name);
  return response.status(201).send('Rating updated successfully');
};

export const deleteRating = async (request, response) => {
  const { id } = request.params;
  await deleteRatingService(id);
  return response.status(204).send();
};
