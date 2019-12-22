const express = require('express')
const bodyParser = require('body-parser')
const findUser = require('../lib/find-user')

let createTokenRoute = (req, res) => {
  let credentials = req.body
  let user = findUser.byCredentials(credentials)

  if(user) {
    let token = 'I am user ' + user.id
    res.status(201)
    res.send(token)
  } else {
    res.sendStatus(422)
  }
}

let tokensRouter = express.Router()

tokensRouter.post('/', bodyParser.json(), createTokenRoute)

module.exports = tokensRouter
