const http = require('http')

const users = require('./fixtures/users')
const emails = require('./fixtures/emails')

let server = http.createServer((req, res) => {
  let route  = req.method +  ' ' + req.url

  if(route === 'GET /users') {
    res.end(JSON.stringify(users))
  } else if (route === 'GET /emails') {
    res.end(JSON.stringify(emails))
  } else {
    res.end("You asked for" + route)
  }
})

server.listen(4002)
