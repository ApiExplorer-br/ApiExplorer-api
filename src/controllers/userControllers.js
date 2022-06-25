import {
  createUserService,
  deleteUserService,
  createJWTService,
  getAllUsersService,
  getUserByIdService,
  editProfileService,
  getAllProjectsUsersService,
} from '../services/userService.js';

export const getAll = async (_request, response) => {
  const users = await getAllUsersService();

  return response.status(200).send(users);
};

export const getAllProjects = async (request, response) => {
  const { id } = request.user;
  const projects = await getAllProjectsUsersService(id);
  response.status(200).send(projects);
};

export const getById = async (request, response) => {
  const { id } = request.params;
  const user = await getUserByIdService(id);

  return response.status(200).send(user);
};

export const getProfile = async (request, response) => {
  const { id } = request.user;
  const user = await getUserByIdService(id);

  return response.status(200).send(user);
};

export const getDataUserFromGithub = async (req, res) => {
  const { access_token } = req.query;

  const jwt_token = await createUserService(access_token);

  return res.status(201).json({ jwt_token });
};

export const refreshToken = async (req, res) => {
  const { id } = req.body;

  const jwt_token = await createJWTService(id);

  res.status(200).json({ jwt_token });
};

export const editProfile = async (request, response) => {
  const { id } = request.user;
  const { name, bio } = request.body;

  await editProfileService(id, name, bio);

  return response.status(200).send({ message: 'User updated successfully' });
};

export const deleteUser = async (req, res) => {
  const { id } = req.user;
  await deleteUserService(id);
  res.status(204).json();
};

export const deleteUserByAdmin = async (req, res) => {
  const { id } = req.params;
  await deleteUserService(id);
  res.status(204).json();
};
