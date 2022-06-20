import path from 'path';
import { fileURLToPath } from 'url';

import { addImageFrontService } from '../services/frontService.js';
// disable eslint for this file
/* eslint-disable */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addImage = async (request, response) => {
  const { file } = request;
  const { id } = request.params;

  await addImageFrontService(file.location, id);
  response.status(200).json(file);
};
