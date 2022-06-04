import { apiGithub } from './apiGithub.js';

const getLanguages = async (userRepo) => {
  const languages = await apiGithub.get(`/${userRepo}/languages`);
  return Object.keys(languages.data);
};

export { getLanguages };
