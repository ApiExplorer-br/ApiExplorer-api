import { getAllFeedbackService } from '../services/feedbackService.js';

export const getAll = async (request, response) => {
  const feedbacks = await getAllFeedbackService();

  return response.status(200).json({ feedbacks });
};
