const express = require('express')
const morgan = require('morgan')
const compress = require('compression')

const userRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')

const notFoundHandler = require('./lib/not-found-handler')

let app = express()
let logger = morgan('tiny')

app.use(logger)
app.use(compress(/*{ threshold: 0 }*/))
app.use(notFoundHandler)
app.use("/users", userRouter)
app.use("/emails", emailsRouter)

app.listen(4003)
