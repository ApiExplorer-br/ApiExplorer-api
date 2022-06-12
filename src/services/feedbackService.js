import { getAllFeedbackModel } from '../models/feedbackModel.js';

export const getAllFeedbackService = async () => {
  const feedbacks = getAllFeedbackModel();

  return feedbacks;
};
