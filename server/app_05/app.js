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
      response.end()

      break
    case '/contact':
      console.log('contact page')
      const data = fs.readFileSync('./public/contact.html', {
        encoding: 'utf8',
        flag: 'r'
      })
      response.write(data)
      response.end()

      break
    default:
      if (url.includes('/images')) {
        console.log(url)
        fs.readFile('./public' + url, {}, (error, data) => {
          if (error) {
            throw Error
          }
          response.setHeader('Content-Type', 'image/png')
          response.write(data)
          response.end()

        })
      } else {
        console.log('404')
        response.write('<h1>404</h1>')
        response.end()
      }

  }
}