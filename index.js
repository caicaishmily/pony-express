const express = require('express')

const userRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')

const logger = require('./lib/logger')
const notFoundHandler = require('./lib/not-found-handler')

let app = express()

app.use(logger)
app.use(notFoundHandler)
app.use("/users", userRouter)
app.use("/emails", emailsRouter)

app.listen(4003)
