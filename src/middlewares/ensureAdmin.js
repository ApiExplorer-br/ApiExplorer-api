import { AppError } from '../errors/AppError';

export const ensureAdmin = async (request, _response, next) => {
  const { admin } = request.user;

  if (!admin) {
    throw new AppError('User does not admin', 401);
  }
  next();
};
