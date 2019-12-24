const jwt = require('jsonwebtoken')
const users = require('../fixtures/users')

const signature = '1m_s3cure'

let findUserByToken = ({userId}) => users.find(user => user.id === userId)

let tokenAuth = (req, res, next) => {
  let header = req.headers.authorization || ''

  let [type, token] = header.split(' ')

  if(type === 'Bearer') {
    let payload = jwt.verify(token, signature)
    let user = findUserByToken(payload)

    if(user) {
      req.user = user
    } else {
      res.sendStatus(401)
      return
    }
  }
  next()
}

module.exports = tokenAuth
