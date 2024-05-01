module.exports = (min = 0, max = 100) => {
  let random = min + Math.random() * (max + 1 - min)
  return Math.floor(random)
}