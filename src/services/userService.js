import { v4 as uuid } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createUserModel,
  deleteUserModel,
  getAllUsersModel,
  getUserById,
  editProfileModel,
  getByUrlGithub,
} from '../models/UserModel.js';
import { getUserData } from '../utils/apiGithub.js';

import { generateJWT } from './auth/generateJWT.js';

export const getUserByUrlGithub = (urlGithub) => getByUrlGithub(urlGithub);

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

export const createJWTService = async (id) => {
  if (!id) throw new AppError('id is required');

  const userExists = await getUserByIdService(id);

  if (!userExists.length) throw new AppError('User does not exists!', 404);

  const jwt_token = await generateJWT(userExists[0]);
  return jwt_token;
};

export const createUserService = async (access_token) => {
  const userDataGithub = await getUserData(access_token);

  const userExists = await getByUrlGithub(userDataGithub.data.html_url);

  if (userExists.length) {
    const jwt_token = await generateJWT(userExists[0]);
    return jwt_token;
  }

  const userData = [userDataGithub.data].map((user) => ({
    id: uuid(),
    name: user.name,
    email: user.email,
    url_github: user.html_url,
    profile: user.avatar_url,
    bio: user.bio,
  }));

  const user = await createUserModel(userData[0]);
  const jwt_token = await generateJWT(user);
  return jwt_token;
};

export const editProfileService = async (id, name, bio) => {
  const user = await getUserById(id);
  if (!user.length) throw new AppError('User not found', 404);
  await editProfileModel(id, name, bio);
};
export const deleteUserService = async (id) => {
  if (!id) throw new AppError('Id is required');
  const user = await getUserById(id);
  if (!user.length) throw new AppError('User does not exists!', 404);
  await deleteUserModel(id);
};
