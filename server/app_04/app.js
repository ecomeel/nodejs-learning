const http = require('http')
const fs = require('fs')
const PORT = 3500
http.createServer(listener).listen(PORT)
function listener(request, response) {
  const url = request.url
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  switch (url) {
    case '/': 
      console.log('main page')
      response.write('<h1>Main page</h1>')
      break
    case '/contact': 
      console.log('contact page')
      const data = fs.readFileSync('./contact.html', {
        encoding: 'utf8',
        flag: 'r'
      })
      response.write(data)
      break
    default:
      console.log('404')
      response.write('<h1>404</h1>')
  }
  response.end()
}