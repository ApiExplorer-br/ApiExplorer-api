export const createUser = async (req, res) => {
  const { name, url_github, profile, bio } = req.query;
  console.log(name, url_github, profile, bio);
};
