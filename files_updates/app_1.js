const fs = require('fs')

// Read files
const filePath = './files/file_1.txt'
const data = fs.readFileSync(filePath, {
  encoding: 'utf8',
  flag: 'r'
})

// Разбиение файла на строки
let dataArr = data.split('\n\n')
dataArr = dataArr.filter(line => line.trim() !== '')
console.log(dataArr)