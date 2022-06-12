import { AppError } from '../errors/AppError.js';
import { getApiByIdService } from '../services/apisService.js';

export const isOwnerApi = async (request, _response, next) => {
  const { id } = request.params;
  const { id: userId } = request.user;
  const api = await getApiByIdService(id);

  if (api && api.user_id !== userId)
    throw new AppError('Unauthorized user', 401);

  next();
};
