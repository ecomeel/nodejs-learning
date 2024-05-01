const randomInt = require('./random_int')

module.exports = (len = 10) => {
  let temp = [];
  for (let i = 0; i < len; i++) {
    temp.push(randomInt())
  }
  return temp
}