const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3500

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg',
  '.wav': 'audio/wav',
  'mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-eof',
  '.wasm': 'application/wasm'
}

function staticFile(response, filePath, ext) {
  response.setHeader('Content-Type', mimeTypes[ext])
  fs.readFile('./public' + filePath, (error, data) => {
    if (error) {
      response.statusCode = 404
      response.end()
    }
    response.end(data)
  })
}

http.createServer((request, response) => {
  const url = request.url
  console.log(url)

  switch (url) {
    case '/contact':
      console.log('contact page')
      staticFile(response, '/contact.html', '.html')
      break
    default:
      const extName = String(path.extname(url)).toLowerCase()

      if (extName in mimeTypes) {
        staticFile(response, url, extName)
      } else {
        response.statusCode = 404
        response.end()
      }

  }
}).listen(PORT)