import { AppError } from '../errors/AppError.js';
import {
  editFrontService,
  getFrontByIdService,
} from '../services/frontService.js';

const validateEditFront = async (req, _res, next) => {
  const { description, url_deploy } = req.body;
  const { id } = req.params;

  if (!description && !url_deploy)
    throw new AppError(
      'Deve ser informada uma url de deploy ou descrição para atualização.'
    );

  // quando não tem descrição ou url_deploy, mantém a info do banco.
  if (!description) {
    const front = await getFrontByIdService(id);
    req.body.description = front[0].description;
    editFrontService(id, req.body);
  }
  if (!url_deploy) {
    const front = await getFrontByIdService(id);
    req.body.url_deploy = front[0].url_deploy;
    editFrontService(id, req.body);
  }

  if (description && description.length > 255)
    throw new AppError('Descrição muito longa!');

  next();
};

export { validateEditFront };
