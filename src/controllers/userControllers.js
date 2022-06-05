import axios from 'axios';

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

export const loginGithub = (req, res) => {
  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code;
  let access_token = '';
  console.log(requestToken);
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
      accept: 'application/json',
    },
  }).then((response) => {
    access_token = response.data.access_token;
    console.log(access_token);
    res.json({ access_token });
  });
};
