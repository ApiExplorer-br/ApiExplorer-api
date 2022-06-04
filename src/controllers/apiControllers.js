import {
  createApiService,
  getAllApisService,
} from '../services/apisService.js';

export const getAllApis = async (_request, response) => {
  const apis = await getAllApisService();
  return response.status(200).json(apis);
};

export const getApiByCategory = async (request, response) => {
  const { category } = request.params;
  const apis = await getAllApisService();
  const filteredApis = apis.filter((api) => api.category === category);
  return response.status(200).json(filteredApis);
};

export const getApiById = async (request, response) => {
  const { id } = request.params;
  const apis = await getAllApisService();
  const filteredApis = apis.filter((api) => api.id === id);
  return response.status(200).json(filteredApis);
};

export const createApi = async (request, response) => {
  const { url, category, description, user_id } = request.body;
  const userRepo = url.split('.com/')[1];

  await createApiService(userRepo, category, description, url, user_id);

  response.status(201).json({ message: 'API created successfully' });
};
