import axios from 'axios';

const apiGithub = axios.create({ baseURL: 'https://api.github.com/repos' });

const githubOAuth = (code) =>
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  });

const getUserData = (access_token) =>
  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: `token ${access_token}`,
    },
  });

export { apiGithub, githubOAuth, getUserData };
