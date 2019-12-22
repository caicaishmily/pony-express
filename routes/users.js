const express = require('express')
const requireAuth = require('../lib/require-auth')

const users =  require('../fixtures/users')

let getUsersRoute = (req, res) => {
  res.send(users)
}

let getUserRoute = (req, res) => {
  let user = users.find(user => user.id === req.params.id)
  res.send(user)
}

let usersRouter = express.Router()

usersRouter.use(requireAuth)

usersRouter.get('/', getUsersRoute)
usersRouter.get('/:id', getUserRoute)

module.exports = usersRouter
