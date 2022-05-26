let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive) //the exclamation mark - negation - turns it to a true/false statement
console.log('will be true all integer numbers except the 0')
console.log(!!3)
console.log(!!-4)
console.log(!!0)

console.log(`
            are also true
`)

console.log(!!' ')//string with a space or something inside
console.log(!![])//array
console.log(!!{})//object
console.log(!!Infinity)
console.log(!!(isActive = Infinity))

//now it is false because the atribuition is false (0 is false as said before)
console.log(!!(isActive = 0))

console.log(`
            The false ones
`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//you can also do a logical statement of true or false

console.log(!!(''||null||0||' '))// the or || is usually used to give a default value to a variable like:

let name = ''//a void name -> a void string is a false statement

console.log(name || 'Unknown') //then will be printed the true sentence that will also be attributed to the variable

