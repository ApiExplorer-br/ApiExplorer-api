import axios from 'axios';

const apiGithub = axios.create({ baseURL: 'https://api.github.com/repos' });

export default apiGithub;
