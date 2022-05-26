//resource from ES2015 

//In an literal object you use braces and in arrays you use square brackets
//Destructuring is 

//Creating an object:
const person = {

    name : 'Ryan',
    age : 42,
    address : {
        Avenue: 'Silicon Valley',
        number: 1000
    }

}

// now we will use the destructuring operator => you take some "properties" from the object

const {name, age} = person// we will take out from person the name and the age
console.log(name, age)
//you can also change the name ov those "properties"

const {name: i, age: b} = person
console.log(i,b)

//in the case of address
const {address:{number}} = person
console.log(avenue, number)

// ------------------------------------- FOR ARRAY -----------------------------------------//
//use the square brackets to destruct arrays

const [n0, , n2, , n4, n5 = 0] = [0,1,2,3]
//n0 = 0, n2 = 2, n4 is not defined (out of the size)
console.log(n0,n2,n4,n5)

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)

//-------------------------------------- FOR FUNCTIONS --------------------------------------//
function rand({min = 0, max = 1000}){//the parameters will be set using the destructor. Also it's using the default parameter
//it means that you will pass an object's attributes without having to access the object
    const value = Math.random()*(max-min) + min
    return Math.floor(rand())

}

console.log(rand({max:50,min:20}))// here you are passing an object. Another way to do this is:

//const obj = {max: 50, min:20}
//console.log(rand(obj))


//------------------------------------- ARRAY IN FUNCTIONS -------------------------------------//
function rand([min = 0, max = 100]){

    if (min > max) [min, max] = [max,min]
    const value = Math.random()*(max-min) + min
    return Math.floor(value) // it will round down
}
console.log(rand([50,20]))