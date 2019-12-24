const users = require('../fixtures/users')

let findUserByCredentials = ({username, password}) =>
  users.find(user => user.username === username && user.password === password)

let findUserByToken = ({userId}) => users.find(user => user.id === userId)

exports.byCredentials = findUserByCredentials
exports.byToken = findUserByToken
