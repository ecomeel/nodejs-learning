// Connect file reading module
const fs = require('fs')
const path = require('path')

// Проверка существования директории или директории
function f01 () {
  const pathToDir = './test'
  if (fs.existsSync(pathToDir)) {
    console.log('yes')
  } else {
    console.log('no')
  }
}
// Вычисление размера файла
function f02 () {
  const filePath = './test/doc.doc'
  fileInfo = fs.statSync(filePath)
  console.log(fileInfo.size)
}
// Имя и расширение файла
function f03 () {
  const filePath = './test/info.dat'
  console.log(path.basename(filePath)) // file name
  console.log(path.dirname(filePath)) // file dir
  console.log(path.extname(filePath)) // file extension
  console.log(path.parse(filePath))
}
// Получение файлы и папки в директории
function f04 () {
  const dirPath = './test'
  let allFiles
  if (fs.existsSync(dirPath)) {
    allFiles = fs.readdirSync(dirPath)
  }
  console.log(allFiles)
}
// Получение абсолютного пути до текущего пространства
function f05 () {
  const dirPath = path.join(__dirname, 'js')
  console.log(dirPath)
}
f05()