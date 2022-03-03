const errorMiddleware = (err, _req, res, _next) => {
  if (err.code && err.status) {
    return res.status(err.status)
      .json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: `Deu ruim... ${err.message}` });
}

module.exports = errorMiddleware;
