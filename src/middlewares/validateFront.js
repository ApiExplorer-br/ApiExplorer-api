import { AppError } from '../errors/AppError.js';

const validateFront = (req, _res, next) => {
  const { name, category, description, url } = req.body;

  if (!name && !category && !description && !url)
    throw new AppError('Algum campo deve ser informado para atualização!');

  if ((name.length || description.length) > 255)
    throw new AppError('Nome ou descrição muito longo!');

  next();
};

export { validateFront };
