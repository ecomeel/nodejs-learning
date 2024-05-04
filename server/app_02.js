const http = require('http')

// Localhost 3500
// function listener(request, response)
http.createServer(listener).listen(3500)

function listener (request, response) {
  console.log(request.url)
  console.log(request.method)
  console.log('server work!')
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.write('<h2>Hello world!</h2>')
  response.end('1')
}