const moduleA = require('./moduleA')//the . is because the file is in the same file that this code is
const moduleB = require('./moduleB')

console.log(moduleA.hi)
console.log(moduleA.wellcome)
console.log(moduleA.seeYou)
console.log(moduleA)

console.log(moduleb.goodMorning)
console.log(moduleb.goodNight())
console.log(moduleB)
