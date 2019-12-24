const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const multer= require('multer')

const generateId = require('../lib/generate-id')
const emails = require('../fixtures/emails')
const requireAuth = require('../lib/require-auth')

class NotFound extends Error {
  constructor(message) {
    super(message)
    this.name = "NotFound"
  }
}

let upload = multer({
  dest: path.join(__dirname, '../uploads')
})

let getEmailsRoute = (req, res) => {
  res.send(emails)
}

let getEmailRoute = (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  if(!email) { throw new NotFound() }
  res.send(email)
}

let createEmailRoute = async (req, res) => {
  let attachments = (req.files || []).map(file => '/uploads/' + file.filename)
  let newEmail = {...req.body, id: generateId(), attachments}
  emails.push(newEmail)
  res.status(201)
  res.send(newEmail)
}

let updateEmailRoute = async (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  let user = req.user
  if(user.id === email.id) {
    Object.assign(email, req.body)
    res.status(200)
    res.send(email)
  } else {
    res.sendStatus(403)
  }
}

let deleteEmailRoute = (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  let user = req.user
  if(user.id === email.to) {
    let index = emails.findIndex(email => email.id === req.params.id)
    emails.splice(index, 1)
    res.sendStatus(204)
  } else {
    res.sendStatus(403)
  }
}

let emailsRouter = express.Router()

emailsRouter.use(requireAuth)

emailsRouter.route('/')
  .get(getEmailsRoute)
  .post(
    bodyParser.json(),
    upload.array('attachments'),
    createEmailRoute
  )

emailsRouter.route('/:id')
  .get(getEmailRoute)
  .patch(bodyParser.json(), updateEmailRoute)
  .delete(deleteEmailRoute)

module.exports = emailsRouter
