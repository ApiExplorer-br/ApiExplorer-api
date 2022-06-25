import {
  createApiService,
  getAllApisService,
  getApiByIdService,
  deleteApiService,
  editApiService,
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
  const api = await getApiByIdService(id);
  return response.status(200).json(api);
};

export const createApi = async (request, response) => {
  const { url, category, description } = request.body;
  const { id } = request.user;
  const userRepo = url.split('.com/')[1];

  await createApiService(userRepo, category, description, url, id);

  response.status(201).json({ message: 'Api criada!' });
};

export const editApi = async (request, response) => {
  const { category, description } = request.body;
  const { id } = request.params;

  await editApiService(id, category, description);

  response.status(201).json({ message: 'Dados atualizados!' });
};

export const deleteApi = async (request, response) => {
  const { id } = request.params;
  await deleteApiService(id);
  return response.status(204).send();
};
