const values = [1.1,2.3,4.0]
console.log(values[0], values[2])

values[3] = 10
console.log(values[3])
console.log(values.length)//this will give us the length of the array

values.push(false, 'I dont get it')//this function let you put new things in the array
console.log(values)

console.log(values.pop())//this function will remove the last value of the array
delete values[0]//it will remove the element in the position 0
console.log(values)

console.log(typeof values)//in JS an array is an object

//even though you can mix data in an array, it's not a good practice of programming!!!
