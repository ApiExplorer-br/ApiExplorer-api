import { AppError } from '../errors/AppError.js';
import { getRatingById } from '../models/RatingModel.js';

export const isOwnerRating = async (req, _res, next) => {
  const { id: userId } = req.user;
  const { id } = req.params;
  const [rating] = await getRatingById(id);

  if (rating.user_id !== userId) throw new AppError('Unauthorized user', 401);

  next();
};
