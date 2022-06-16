import {
  createRatingService,
  editRatingService,
  deleteRatingService,
  getEvaluationsByApiService,
} from '../services/ratingService.js';

export const getEvaluationsByApi = async (request, response) => {
  const { id } = request.params;
  const evaluations = await getEvaluationsByApiService(id);

  response.status(200).json(evaluations);
};

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
  const { rating, message } = request.body;
  const { id } = request.params;
  await editRatingService(id, rating, message);
  return response.status(201).send('Avaliação atualizada!');
};

export const deleteRating = async (request, response) => {
  const { id } = request.params;
  await deleteRatingService(id);
  return response.status(204).send();
};
