import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../errors/AppError.js';
import {
  getAllFeedbackModel,
  createFeedbackModel,
  deleteFeedbackModel,
  getFeedbackById,
  editFeedbackReadModel,
} from '../models/FeedbackModel.js';

export const getAllFeedbackService = async () => {
  const feedbacks = getAllFeedbackModel();

  return feedbacks;
};

export const createFeedbackService = async (message, name, email, user_id) => {
  await createFeedbackModel(uuidv4(), message, name, email, user_id);
};

export const deleteFeedbackService = async (id) => {
  const feedbackExists = await getFeedbackById(id);
  console.log(feedbackExists);
  if (!feedbackExists.length) throw new AppError('Feedback not found', 404);
  await deleteFeedbackModel(id);
};

export const editReadStateService = async (id) => {
  const feedbackExists = await getFeedbackById(id);
  if (!feedbackExists.length) throw new AppError('Feedback not found', 404);
  await editFeedbackReadModel(id, !feedbackExists[0].isRead);
};
