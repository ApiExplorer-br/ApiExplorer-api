import crypto from 'crypto';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

import { AppError } from '../errors/AppError.js';

/* eslint-disable */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
};
export const multerConfig = {
  dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
  storage: storageTypes.local,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new AppError('Formato inválido ou arquivo muito grande.'));
    }
  },
};
