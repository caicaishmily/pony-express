const express = require('express')

const users = require('./fixtures/users')
const emails = require('./fixtures/emails')

let app = express()

let getUsersRoute = (req, res) => {
  res.send(users)
}

let getEmailsRoute = (req, res) => {
  res.send(emails)
}

let routes = {
  "GET /users": getUsersRoute,
  "GET /emails": getEmailsRoute
}

let noRouteFound = (req, res) => {
  let route = req.method + '' + req.url
  res.end("You asked for " + route)
}

app.use((req, res) => {
  let route  = req.method +  ' ' + req.url

  let handler = routes[route] || noRouteFound
  handler(req, res)
})

app.listen(4003)
