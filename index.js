const express = require('express')

const userRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')

const logger = require('./lib/logger')

let app = express()

app.use(logger)
app.use("/users", userRouter)
app.use("/emails", emailsRouter)

app.listen(4003)
