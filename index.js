const express = require('express')
const morgan = require('morgan')
const compress = require('compression')
const serveStatic = require('serve-static')
const path = require('path')

const userRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')

const notFoundHandler = require('./lib/not-found-handler')

let app = express()
let logger = morgan('tiny')

app.use(logger)
app.use(compress(/*{ threshold: 0 }*/))
app.use(serveStatic(path.join(__dirname, 'public')))
app.use('/uploads', serveStatic(path.join(__dirname, 'uploads')))
app.use(notFoundHandler)
app.use("/users", userRouter)
app.use("/emails", emailsRouter)

app.listen(4003)
