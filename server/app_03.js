const http = require('http')
const PORT = 3500
http.createServer(listener).listen(PORT)

function listener(request, response) {
  const url = request.url
  console.log(url)

  switch (url) {
    case '/': 
      console.log('main page')
      response.write('<h1>Main page</h1>')
      break
    case '/contact': 
      console.log('contact page')
      response.write('<h1>contact page</h1>')
      break
    default:
      console.log('404')
      response.write('<h1>404</h1>')
  }
  response.end()
}