const express = require('express')

const userRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')

let app = express()

app.use("/users", userRouter)
app.use("/emails", emailsRouter)

app.listen(4003)
