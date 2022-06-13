import axios from 'axios';

const apiGithub = axios.create({ baseURL: 'https://api.github.com/repos' });

const getUserData = (access_token) =>
  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: `token ${access_token}`,
    },
  });

export { apiGithub, getUserData };
