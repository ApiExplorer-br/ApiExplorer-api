import { randomUUID } from 'node:crypto';

import { AppError } from '../errors/AppError.js';
import {
  getAllFrontModel,
  createFrontModel,
  getFrontByUrlModel,
  getFrontByIdModel,
  editFrontModel,
  deleteFrontModel,
  getFrontByApiIdModel,
  addImageFrontModel,
  getFrontsByUserModel,
} from '../models/frontModel.js';
import { apiGithub } from '../utils/apiGithub.js';
import { getLanguages } from '../utils/getLanguages.js';

export const getAllFrontService = async () => {
  const fronts = await getAllFrontModel();
  return fronts;
};

export const getFrontByUserService = async (userId) => {
  const apis = await getFrontsByUserModel(userId);
  return apis;
};

export const createFrontService = async (frontData, user_id) => {
  const { url, description, url_deploy, url_img, api_id } = frontData;
  const userRepo = url.split('.com/')[1];
  const technologies = await getLanguages(userRepo);
  const repoData = await apiGithub.get(`/${userRepo}`);

  const frontExists = await getFrontByUrlModel(url);
  if (frontExists.length)
    throw new AppError('Este front-end já está cadastrado.');

  let { homepage } = repoData.data;
  if (!url_deploy && homepage && !homepage.includes('http')) {
    homepage = `https://${homepage}`;
  }

  const filteredData = [repoData.data].map((repo) => ({
    id: randomUUID(),
    name: repo.name,
    url_repo: repo.html_url,
    technologies: JSON.stringify(technologies),
    description,
    url_deploy: url_deploy || homepage,
    url_img,
    api_id,
    user_id,
  }));
  const values = Object.values(filteredData[0]);

  return createFrontModel(...values);
};

export const getFrontByIdService = async (id) => {
  const front = await getFrontByIdModel(id);
  if (!front.length) throw new AppError('Front-end não encontrado!');
  return front;
};

export const getFrontByApiIdService = async (api_id) => {
  const front = await getFrontByApiIdModel(api_id);
  return front;
};

export const addImageFrontService = async (url_img, id) => {
  await addImageFrontModel(url_img, id);
};

export const editFrontService = async (id, frontData) => {
  let { description, url_deploy } = frontData;
  if (description === undefined) description = null;
  if (url_deploy === undefined) url_deploy = null;
  const front = await getFrontByIdModel(id);
  if (!front.length) throw new AppError('Front-end não encontrado!');
  const udpatedFront = await editFrontModel(id, description, url_deploy);
  return udpatedFront;
};

export const deleteFrontService = async (id) => {
  const front = await getFrontByIdModel(id);
  if (!front.length) throw new AppError('Front-end não encontrado!');
  const deletedFront = await deleteFrontModel(id, null, null, null);
  return deletedFront;
};
