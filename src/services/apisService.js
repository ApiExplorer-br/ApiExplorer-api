import { AppError } from '../errors/AppError.js';
import {
  createApiModel,
  getAllApiModel,
  getApiByUrl,
} from '../models/ApisModel.js';
import { apiGithub } from '../utils/apiGithub.js';
import { getLanguages } from '../utils/getLanguages.js';

export const getAllApisService = async () => {
  const apis = await getAllApiModel();

  return apis.map((api) => {
    return {
      ...api,
      technologies: JSON.parse(api.technologies),
    };
  });
};

export const createApiService = async (
  userRepo,
  category,
  description,
  url,
  user_id
) => {
  const technologies = await getLanguages(userRepo);

  if (technologies.includes('HTML')) {
    throw new AppError('This repository is not an api!');
  }

  const apiExists = await getApiByUrl(url);
  if (apiExists.length)
    throw new AppError('This repository is already an api!', 409);

  const repoData = await apiGithub.get(`/${userRepo}`);
  const filteredData = [repoData.data].map((repo) => ({
    name: repo.name,
    url_repo: repo.html_url,
    technologies: JSON.stringify(technologies),
    category,
    description,
    rating: 0,
  }));
  const values = Object.values(filteredData[0]);
  return createApiModel(...values, user_id);
};
