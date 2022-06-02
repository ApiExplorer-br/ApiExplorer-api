import { apiGithub } from '../utils/apiGithub.js';

const createApi = async (request, response) => {
  const { url, category, description } = request.body;
  const userRepo = url.split('.com/')[1];

  try {
    const languages = await apiGithub.get(`/${userRepo}/languages`);
    const repoData = await apiGithub.get(`/${userRepo}`);
    const filteredData = [repoData.data].map((repo) => ({
      name: repo.name,
      url_repo: repo.html_url,
      technologies: Object.keys(languages.data),
      category,
      description,
    }));
    return response.status(200).json(filteredData);
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      message: 'Repo not found or private',
    });
  }
  // name: repo.name,
  //     url_repo: repo.html_url,
  //     technologies: repo.languages,
  //     category,
  //     description,
  //     rating,name: repo.name,
  //     url_repo: repo.html_url,
  //     technologies: repo.languages,
  //     category,
  //     description,
  //     rating,
  // response.status(200).json('ok');
};

export { createApi };
