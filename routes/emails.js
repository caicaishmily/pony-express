const express = require('express')

const emails = require('../fixtures/emails')

const readBody = require('../lib/read-body')

let getEmailsRoute = (req, res) => {
  res.send(emails)
}

let getEmailRoute = (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  res.send(email)
}

let createEmailRoute = async (req, res) => {
  let body = await readBody(req)
  console.log(body.toString())
}

let emailsRouter = express.Router()

emailsRouter.get('/', getEmailsRoute)
emailsRouter.get('/:id', getEmailRoute)
emailsRouter.post('/', createEmailRoute)

module.exports = emailsRouter
