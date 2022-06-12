import { connection } from '../db/index.js';

export const getAllFeedbackModel = async () => {
  const [feedbacks] = await connection.execute(`SELECT * FROM feedbacks`);
  return feedbacks;
};
