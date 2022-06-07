import { v4 as uuid } from 'uuid';

import { createUserModel, getByEmail } from '../models/UserModel.js';

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
