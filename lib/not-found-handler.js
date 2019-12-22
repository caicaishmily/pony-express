let notFoundHandler = (err, req, res, next) => {
  if(err instanceof NotFound) {
    next()
  } else {
    next(err)
  }
}

module.exports = notFoundHandler
