let enforce = (policy) => (req, res, next) => {
  if(policy(req)) {
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = enforce
