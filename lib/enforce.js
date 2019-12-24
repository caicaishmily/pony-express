let enforce = (policy) => (req, res, next) => {
  req.authorize = (resource) => {
    if(!policy(req.user, resource)) {
      res.sendStatus(403)
    }
  }
  next()
}

module.exports = enforce
