import {
  getAllFeedbackService,
  createFeedbackService,
  deleteFeedbackService,
  editReadStateService,
} from '../services/feedbackService.js';

export const getAll = async (request, response) => {
  const feedbacks = await getAllFeedbackService();

  return response.status(200).json({ feedbacks });
};

export const createFeedback = async (request, response) => {
  const { message } = request.body;
  const { name, email, id } = request.user;

  await createFeedbackService(message, name, email, id);

  response.status(201).json({ message: 'Feedback created!' });
};

export const deleteFeedback = async (request, response) => {
  const { id } = request.params;

  await deleteFeedbackService(id);

  response.status(200).json({ message: 'Feedback deleted!' });
};

export const editReadState = async (request, response) => {
  const { id } = request.params;
  await editReadStateService(id);

  response.status(200).json({ message: 'isRead updated' });
};
