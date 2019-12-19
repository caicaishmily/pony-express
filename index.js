const http = require('http')

let server = http.createServer((req, res) => {
  let route  = req.method +  ' ' + req.url
  res.end("You asked for" + route)
})

server.listen(4002)
