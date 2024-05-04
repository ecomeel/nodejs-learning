const http = require('http')

// Localhost 3500
// function listener(request, response)
http.createServer(listener).listen(3500)

function listener(request, response) {
  console.log('server work!')
  response.end('1')
}