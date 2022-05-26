//Using literal notation to create an object:
const person = {
    name: Brian,
    age: 26,
    weight: 86
}

console.log(Object.keys(person))//object is a colection of keys and values. Keys will print only keys
console.log(Object.values(person))//values
console.log(Object.entries(person))//key and values

Object.entries(person).forEach(e => {//used to go through each key/value
    console.log(`${e[0]}: ${e[1]}`)
})
//another way to do this:
Object.entries(person).forEach(([key, value]) => {//using destructuring
    console.log(`${key}: ${value}`)
})

//you can determinate characteristics of specifics attributes like if they will be or not visible:
Object.defineProperty(person/*you have to set which the property*/, 'birthData',{
    enumerable: true, //if it can be listed
    writable: false, // propertie cannot be changed
    value: '01/01/2019'
})

person.birthData = '03/02/26'
console.log(person.birthData)
console.log(Object.keys(person))