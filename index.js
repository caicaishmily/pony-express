const express = require('express')

const users = require('./fixtures/users')
const emails = require('./fixtures/emails')

let app = express()
let userRouter = express.Router()
let emailsRouter = express.Router()

let getUsersRoute = (req, res) => {
  let user = users.find(user => user.id === req.params.id)
  res.send(user)
}

let getEmailsRoute = (req, res) => {
  let email = emails.find(email => email.id === req.params.id)
  res.send(email)
}

userRouter.get('/', getUsersRoute)
userRouter.get('/:id', getUsersRoute)
emailsRouter.get('/', getEmailsRoute)
emailsRouter.get('/:id', getEmailsRoute)

app.use("/users", userRouter)
app.use("/emails", emailsRouter)

app.listen(4003)
