const users = require('../fixtures/users')

let findUserByCredentials = ({username, pwd}) =>
  users.find(user => user.username === username && user.password === pwd)

let basicAuth = (req, res, next) => {
  let header = req.headers.authorization || ''

  let [type, payload] = header.split(' ')

  if(type === 'Basic') {
    let credentials = Buffer.from(payload, 'base64').toString('ascii')
    let [username, password] = credentials.split(':')
    let user = findUserByCredentials({username, password})

    if(user) {
      req.user = user
    } else {
      res.sendStatus(401)
      return
    }
  }
  next()
}

module.exports = basicAuth
