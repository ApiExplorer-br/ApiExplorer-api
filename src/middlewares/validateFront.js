import { AppError } from '../errors/AppError.js';

const validateFront = (req, _res, next) => {
  const { url, category, api_id, description } = req.body;

  if (!api_id && !category && !description && !url)
    throw new AppError('Algum campo deve ser informado para atualização!');

  if (description.length > 255)
    throw new AppError('Nome ou descrição muito longo!');

  next();
};

export { validateFront };
