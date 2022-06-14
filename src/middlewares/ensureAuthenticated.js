import jwt from 'jsonwebtoken';

import { AppError } from '../errors/AppError.js';
import { getUserByIdService } from '../services/userService.js';

export const ensureAuthenticated = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const secret = process.env.JWT_SECRET;
    const { user } = jwt.verify(token, secret);
    const userExists = await getUserByIdService(user.id);

    if (!userExists.length) {
      throw new AppError('User or admin does not exists!', 404);
    }
    const [userData] = userExists;
    request.user = userData;
    next();
  } catch (error) {
    throw new AppError(error.message, error.statusCode);
  }
};
