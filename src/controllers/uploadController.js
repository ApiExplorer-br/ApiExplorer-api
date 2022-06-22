import path from 'path';
import { fileURLToPath } from 'url';

import { deleteFileFromS3 } from '../config/libs/s3Client.js';
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

export const deleteImage = async (request, response) => {
  const { Key } = request.query;
  await deleteFileFromS3(Key);
  response.status(204).send();
} 