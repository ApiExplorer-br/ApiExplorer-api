import { createJwt } from '../services/auth/createJwt.js';
import { getUserByEmail, createUserService } from '../services/userService.js';
import { getUserData, githubOAuth } from '../utils/apiGithub.js';

export const loginGithub = async (req, res) => {
  const { code } = req.query;
  const response = await githubOAuth(code);
  const { access_token } = response.data;
  if (!access_token) return;
  res.redirect(`/users/login/get-user-data?access_token=${access_token}`);
};

export const getDataUserFromGithub = async (req, res) => {
  const { access_token } = req.query;

  const userData = await getUserData(access_token);

  const userExists = await getUserByEmail(userData.data.email);

  if (userExists.length) {
    const jwt_token = await createJwt(userExists[0].email);
    return res.status(200).json({ jwt_token });
  }

  const userCreated = await createUserService(userData.data);

  const jwt_token = await createJwt(userCreated.email);
  return res.status(201).json({ jwt_token });
};
