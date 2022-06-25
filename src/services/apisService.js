import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  createApiModel,
  getAllApiModel,
  getApiByIdModel,
  getApiByUrl,
  deleteApiModel,
  editApiModel,
} from '../models/ApisModel.js';
import { getApiRatingById } from '../models/RatingModel.js';
import { apiGithub } from '../utils/apiGithub.js';
import { getLanguages } from '../utils/getLanguages.js';

import { getFrontByApiIdService } from './frontService.js';

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
  const fronts = await getFrontByApiIdService(id);
  const evaluations = await getApiRatingById(id);

  if (!api.length) throw new AppError('Api não encontrada!', 404);
  return {
    ...api[0],
    fronts,
    evaluations,
    technologies: JSON.parse(api[0].technologies),
  };
};

export const createApiService = async (
  userRepo,
  category,
  description,
  url,
  user_id
) => {
  const technologies = await getLanguages(userRepo);

  const apiExists = await getApiByUrl(url);
  if (apiExists.length)
    throw new AppError('Esse repositório já está cadastrado!', 409);

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

export const editApiService = async (id, category, description) => {
  const api = await getApiByIdModel(id);
  if (!api.length) throw new AppError('Api não encontrada!', 404);
  return editApiModel(id, category, description);
};

export const deleteApiService = async (id) => {
  const apiExists = await getApiByIdModel(id);
  if (!apiExists.length) throw new AppError('Api não encontrada!', 404);
  return deleteApiModel(id);
};
