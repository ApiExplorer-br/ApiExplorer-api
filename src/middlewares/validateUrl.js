const validateUrl = (req, res, next) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({
      message: 'Url is required',
    });
  }

  if (!url.startsWith('https://github.com/')) {
    return res.status(400).json({
      message: 'Url is invalid',
    });
  }

  return next();
};

export { validateUrl };
