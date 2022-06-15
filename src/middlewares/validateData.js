import { AppError } from '../errors/AppError.js';

const validateData = (req, res, next) => {
  const { url, description } = req.body;

  if (!url) throw new AppError('Url é obrigatória!', 400);

  if (!description) throw new AppError('Descrição é obrigatória!');

  if (description.length > 255) throw new AppError('Descrição muito longa!');

  if (!url.startsWith('https://github.com/'))
    throw new AppError('Url inválida!');

  next();
};

export { validateData };
