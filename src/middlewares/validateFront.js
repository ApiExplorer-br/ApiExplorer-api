import { AppError } from '../errors/AppError.js';

const validateFront = (req, _res, next) => {
  const { url, category, api_id, description } = req.body;

  if (!url) throw new AppError('Url é obrigatória!');
  if (!url.startsWith('https://github.com/'))
    throw new AppError('A url precisa ser de um repositório do github!');

  if (!category) throw new AppError('Categoria é obrigatória!');
  if (!api_id) throw new AppError('Api é obrigatória!');
  if (!description) throw new AppError('Descrição é obrigatória!');

  if (description.length > 255)
    throw new AppError('Nome ou descrição muito longo!');

  next();
};

export { validateFront };
