const express = require('express')

const emails = require('../fixtures/emails')

let getEmailsRoute = (req, res) => {
  res.send(emails)
}

let getEmailRoute = (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  res.send(email)
}

let emailsRouter = express.Router()

emailsRouter.get('/', getEmailsRoute)
emailsRouter.get('/:id', getEmailRoute)

module.exports = emailsRouter
