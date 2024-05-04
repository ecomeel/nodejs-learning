const fs = require('fs')
const text = 'Какой-то текст\r\nSome text\nSome else'

// write to file
// const filePath = './files/file_2.txt'
// fs.writeFileSync(filePath, text, {
//   encoding: 'utf8',
//   flag: 'a'
// })

// write file from array
const filePath = './files/file_3.txt'
const arr = [
  '- text1',
  '- text2',
  '- text3'
]
fs.writeFileSync(filePath, arr.join('\r\n'))