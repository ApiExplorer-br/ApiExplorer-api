import { v4 as uuid } from 'uuid';

import { AppError } from '../errors/AppError.js';
import { createUserModel, getByEmail } from '../models/UserModel.js';

export const getUserByEmail = (email) => getByEmail(email);

export const createUserService = async (
  name,
  email,
  url_github,
  profile,
  bio
) => {
  const userExists = await getByEmail(email);
  if (userExists.length) throw new AppError('User already exists');
  const user = await createUserModel(
    uuid(),
    name,
    email,
    url_github,
    profile,
    bio
  );
  return user;
};
