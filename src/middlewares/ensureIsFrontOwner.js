import { AppError } from '../errors/AppError.js';
import { getFrontByIdService } from '../services/frontService.js';

export const ensureIsFrontOwner = async (request, _response, next) => {
  const { id } = request.params;
  const { id: user_id, admin } = request.user;
  const [front] = await getFrontByIdService(id);

  if (front.user_id !== user_id && !admin)
    throw new AppError('Usuário não autorizado a atualizar este front.', 401);

  next();
};
