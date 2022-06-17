import {
  getAllFrontService,
  createFrontService,
  getFrontByIdService,
  editFrontService,
  deleteFrontService,
} from '../services/frontService.js';

export const getAllFronts = async (request, response) => {
  const fronts = await getAllFrontService();
  return response.status(200).json(fronts);
};

export const createFront = async (request, response) => {
  const { id: user_id } = request.user;
  await createFrontService(request.body, user_id);
  response.status(201).json({ message: 'Front cadastrado com sucesso' });
};

export const getFrontById = async (request, response) => {
  const { id } = request.params;
  const front = await getFrontByIdService(id);
  return response.status(200).json(front);
};

export const editFront = async (request, response) => {
  const { id } = request.params;
  await editFrontService(id, request.body);
  response.status(201).json({ message: 'Dados atualizados!' });
};

export const deleteFront = async (request, response) => {
  const { id } = request.params;
  await deleteFrontService(id);
  response.status(200).json({ message: 'Front deletado com sucesso' });
};

// getFrontsByUser? Validar com Thiago
