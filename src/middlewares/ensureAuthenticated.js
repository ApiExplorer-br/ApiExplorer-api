import jwt from 'jsonwebtoken';

import { AppError } from '../errors/AppError.js';
import { getUserByEmail } from '../services/userService.js';

export const ensureAuthenticated = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const secret = process.env.JWT_SECRET;
    const { user } = jwt.verify(token, secret);
    const userData = await getUserByEmail(user.email);

    if (!userData.length) {
      throw new AppError('User does not exists!', 404);
    }
    // eslint-disable-next-line
    request.user = userData[0];
    next();
  } catch (error) {
    throw new AppError(error.message, error.statusCode);
  }
};
