import axios from 'axios';

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

export const loginGithub = async (req, res) => {
  const requestToken = req.query.code;
  const response = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json',
    },
  });
  const { access_token } = response.data;

  if (!access_token) return;
  res.redirect(`/login/success?access_token=${access_token}`);
};

export const getDataUser = async (req, res) => {
  const { access_token } = req.query;

  const response = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: `token ${access_token}`,
    },
  });

  const userData = [response.data].map(
    (user) => `
    name=${user.name}&
    url_github=${user.html_url}&
    profile=${user.avatar_url}&
    bio=${user.bio}`
  );
  res.redirect(`/users?${userData}`);
};
