//attribution by value and by reference

/*ATTRIBUTION BY REFERENCE */
const a = {name : 'Adam'}//a doesn't have the content of the object. It has the adress of this content
console.log(a)

const b = a//b receives the same adress that a is pointing
console.log(b)

b.name = 'Yuri' //if you change the content in that adress so the change will appear in a too 
console.log(a)
console.log(b) 

/*ATTRIBUTION BY VALUE*/

let c = 3 //this value is the primitive/basic type. So the attribution is by value!
console.log(c)

let d = c
console.log(d)

d++
console.log(d)
console.log(c)

//-------------------------------- UNDEFINED AND NULL-------------------------------------//

let variable //variabel unitialized is undefined # from not defined -> variable not criated
console.log(variable) 

variable = null // variable initialized not pointing to any memory address -> she is defined with this characteristic
console.log(variable)

//Use null to not point or to anulate any previous value of your variable. Do not use undefined!

//console.log(variable.toString)//Erro! It's not possible to access any property of a null value.

const product = {}
console.log(product.price)//because product is defined it won't result in error, but will result in undefined 

//to delete an attribute from an object you must use delete

product.price = 10
console.log(product.price)

product.price = undefined //do not use it!
console.log(product.price)

product.price = null 
console.log(!!product.price)


delete product.price
console.log(product.price)