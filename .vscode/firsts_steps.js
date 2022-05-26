/*This is a sentence*/
console.log("Hello World!")

//a block is made with braces -> You can use is repetition structures for example.

/*////////////////////Numbers/////////////////////////////////*/

//^^^^^^^^^^^^^^^^^^^^Média^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

const peso = 2 //constant value is invariable 
let bin1 = Number('5.5')
let bin2 = 8.9
let bin3 = Number('7.3')
let bin4 = 3.0

console.log(bin1,bin2)
console.log(Number.isInteger(bin1))//isInteger is a boolean that will return true or false 
console.log(Number.isInteger(bin4))//it will be true if bin is integer.

const soma = bin1+bin2+bin3+bin4+bin4

const media = soma/5

console.log(media)

console.log(media.toFixed(1))//this is how to set the precision of decimals
//media doesn't have its value changed by toFixed. This is just how it is printed in the console

console.log(media.toString(2))//this will print in binary due the number 2 in the function

console.log(typeof media)//typeof will give us the actual type of the constant/incongnit/function etc



/*///////////////////////////Algumas operações estranhas///////////////////////////////////*/

console.log(7/0)//this division will result in an answer of type "infinity"
console.log("10"/2)//besides "10" be a string, it will result in an division of 10 by 2
console.log("Show! " * 2)//in JS it has no meaning. Will result in NaN.
console.log(0.1 + 0.7)//It won't result in 0.8 because of the JS specification
//console.log(10.toString(2))//it is not acceptable. You must use parentheses.
console.log((10).toString(2))



/*////////////////////////////MATH - object /////////////////////////// */

//JS doesn't have exponential... you mus use this object.

const raio = 4
const area = Math.PI*Math.pow(raio,2)

console.log(area)

/*//////////////////////////// String /////////////////////////////////// */

const caracter = Cod3r 

console.log(caracter.charAt(4))//JS begin the counting from 0. So this function will return the r - it is the fifith position in this string
console.log(caracter.charCodeAt(3))//it will give us the value in the ASCII table of the number 3
console.log(caracter.indexOf('3'))//return the position of a specified value if it is in the string
console.log(caracter.substring(1))//will print from this position
console.log(caracter.substring(0,3))//It will print the whole sentence

console.log('Learning '.concat(caracter).concat("!"))//Observe that you use string without parentheses and can use simple or double quotes
console.log('Learning ' + caracter + "!")//another way to concatenate. + Will always concatenate strings! 

console.log(caracter.replace(3,'e'))//it will replace the 3 in the string to the letter e 

console.log('John,Peter,William'.split(','))//it will split the strings in every comma


/*///////////////////////////// Templates ///////////////////////////////////////*/
