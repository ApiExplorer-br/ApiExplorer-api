import { v4 as uuid } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createUserModel,
  getByEmail,
  deleteUserModel,
} from '../models/UserModel.js';

import { createJwt } from './auth/createJwt.js';

export const getUserByEmail = (email) => getByEmail(email);

export const createUserService = async (userDataGithub) => {
  const userData = [userDataGithub].map((user) => ({
    id: uuid(),
    name: user.name,
    email: user.email,
    url_github: user.html_url,
    profile: user.avatar_url,
    bio: user.bio,
  }));

  const user = await createUserModel(userData[0]);

  return user;
};

export const createJWTService = async (email) => {
  if (!email) throw new AppError('Email is required');

  const userExists = await getUserByEmail(email);

  if (!userExists.length) throw new AppError('User does not exists!', 404);

  const jwt_token = await createJwt(userExists[0].email);
  return jwt_token;
};

export const deleteUserService = async (id) => {
  await deleteUserModel(id);
};
