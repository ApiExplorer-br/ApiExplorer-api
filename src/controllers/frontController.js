import {
  getAllFrontService,
  createFrontService,
  getFrontByIdService,
  editFrontService,
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

// PUT
// DELETE

// getFrontsByUser? Validar com Thiago

// editFront
