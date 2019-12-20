const express = require('express')

const users = require('./fixtures/users')
const emails = require('./fixtures/emails')

let app = express()
let router = express.Router()

let getUsersRoute = (req, res) => {
  let user = users.find(user => user.id === req.params.id)
  res.send(user)
}

let getEmailsRoute = (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  res.send(email)
}

router.get('/users', getUsersRoute)
router.get('/users/:id', getUsersRoute)
router.get('/emails', getEmailsRoute)
router.get('/emails/:id', getEmailsRoute)

app.use(router)

app.listen(4003)
