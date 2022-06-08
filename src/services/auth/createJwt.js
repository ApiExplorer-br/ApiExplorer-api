import jwt from 'jsonwebtoken';

import { getByEmail } from '../../models/UserModel.js';

export const createJwt = async (email) => {
  const [user] = await getByEmail(email);

  const jwtConfig = { expiresIn: '48h', algorithm: 'HS256' };

  const secret = process.env.JWT_SECRET;

  return jwt.sign({ user }, secret, jwtConfig);
};
