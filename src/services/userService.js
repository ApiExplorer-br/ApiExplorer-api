import { v4 as uuid } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createUserModel,
  getByEmail,
  deleteUserModel,
  getAllUsersModel,
  getUserById,
} from '../models/UserModel.js';

import { createJwt } from './auth/createJwt.js';

export const getUserByEmail = (email) => getByEmail(email);

export const getAllUsersService = async () => {
  const users = await getAllUsersModel();
  users.sort((a, b) => a.name.localeCompare(b.name));
  return users;
};

export const getUserByIdService = async (id) => {
  const user = await getUserById(id);
  if (!user.length) throw new AppError('User not found', 404);
  return user;
};

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
  if (!id) throw new AppError('Id is required');
  const user = await getUserById(id);
  if (!user.length) throw new AppError('User does not exists!', 404);
  await deleteUserModel(id);
};
