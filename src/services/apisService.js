import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createApiModel,
  getAllApiModel,
  getApiByIdModel,
  getApiByUrl,
  deleteApiModel,
  getApiByUserModel,
} from '../models/ApisModel.js';
import { getApiRatingById } from '../models/RatingModel.js';
import { apiGithub } from '../utils/apiGithub.js';
import { getLanguages } from '../utils/getLanguages.js';

export const getAllApisService = async () => {
  const apis = await getAllApiModel();

  const allApis = await apis.map(async (api) => {
    const apiRating = await getApiRatingById(api.id);
    if (apiRating.length) {
      const overallRating = Math.round(
        apiRating.reduce((acc, curr) => acc + curr.rating, 0) / apiRating.length
      );
      return {
        ...api,
        rating: overallRating,
        technologies: JSON.parse(api.technologies),
      };
    }
    return { ...api, technologies: JSON.parse(api.technologies) };
  });
  const api = Promise.all(allApis);
  return api;
};

export const getApiByIdService = async (id) => {
  const api = await getApiByIdModel(id);
  const apiRating = await getApiRatingById(id);

  if (!api.length) throw new AppError('Api not found', 404);
  return {
    ...api[0],
    rating: apiRating,
    technologies: JSON.parse(api[0].technologies),
  };
};

export const getApiByUserService = async (userId) => {
  const apis = await getApiByUserModel(userId);
  return apis;
};
export const createApiService = async (
  userRepo,
  category,
  description,
  url,
  user_id
) => {
  const technologies = await getLanguages(userRepo);

  if (technologies.includes('HTML') || technologies.includes('CSS')) {
    throw new AppError('Esse repositório parece ser um front-end!');
  }

  const apiExists = await getApiByUrl(url);
  if (apiExists.length)
    throw new AppError('This repository is already an api!', 409);

  const repoData = await apiGithub.get(`/${userRepo}`);
  const filteredData = [repoData.data].map((repo) => ({
    id: uuidv4(),
    name: repo.name,
    url_repo: repo.html_url,
    technologies: JSON.stringify(technologies),
    category,
    description,
    rating: 0,
    user_id,
  }));
  const values = Object.values(filteredData[0]);
  return createApiModel(...values);
};
export const deleteApiService = async (id) => {
  const apiExists = await getApiByIdModel(id);
  if (!apiExists.length) throw new AppError('This api does not exist!', 404);
  return deleteApiModel(id);
};
