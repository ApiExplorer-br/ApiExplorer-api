import { AppError } from '../errors/AppError.js';
import { getUserByEmail, createUserService } from '../services/userService.js';
import { getUserData, githubOAuth } from '../utils/apiGithub.js';
import { createSession } from '../utils/createSession.js';

export const loginGithub = async (req, res) => {
  const { code } = req.query;
  const response = await githubOAuth(code);
  const { access_token } = response.data;

  if (!access_token) throw new AppError('Invalid token', 401);
  res.redirect(`/users/login/get-user-data?access_token=${access_token}`);
};

export const getDataUserFromGithub = async (req, res) => {
  const { access_token } = req.query;

  const userData = await getUserData(access_token);

  const userExists = await getUserByEmail(userData.data.email);

  if (userExists.length) {
    const user = {
      ...userExists[0],
      session: { expire_in: createSession() },
    };
    return res.status(200).json({ user });
  }

  const userCreated = await createUserService(userData.data);

  return res.status(201).json({
    user: { ...userCreated, session: { expire_in: createSession() } },
  });
};
