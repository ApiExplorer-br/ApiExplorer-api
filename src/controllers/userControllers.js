import { createUserService } from '../services/userService.js';

export const createUser = async ({ name, email, url_github, profile, bio }) => {
  const user = await createUserService(name, email, url_github, profile, bio);
  return user;
};
