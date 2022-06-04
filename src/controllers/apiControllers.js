import { createApiService } from '../services/apisService.js';

const createApi = async (request, response) => {
  const { url, category, description, user_id } = request.body;
  const userRepo = url.split('.com/')[1];

  await createApiService(userRepo, category, description, url, user_id);

  response.status(200).json({ message: 'API created successfully' });
};

export { createApi };
