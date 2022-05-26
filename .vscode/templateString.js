const name = 'Will'
const concatenation = 'hello ' + name + '!'

const template = `
                Hello
                ${name}!
                 `

//This is a more elegant way to use string. It support and consider line break
console.log(concatenation, template)
//The template also allows to make operations:
console.log(`1 + 1 = ${1+1}`)

//You can also use it like a function

const up = text => text.toUpperCase()
console.log(`Hey... ${up('watch out')}`)  