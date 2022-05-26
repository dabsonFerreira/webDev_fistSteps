console.log(typeof Object) // Object should be an object, but in JS it is a function
console.log(typeof new Object) //this is an instance of an object/function. You could use parentheses. 
//This is equivalet of calling the constructor.

const client = function(){}
console.log(typeof client)
//you create a function but you can make an instance and it turns an object:
console.log(typeof new client)

class Product {} //it is a new default from EchoScript 2015 (ES6) -> a new version of JS
//this is a sintax sugar -> It's a sintax detail/ sintax shortcut => you are really creating an function

console.log(typeof Product)
console.log(typeof new Product)//This is an instance of this class/function ->will create an object

//A way to create an object is from functions in JS. You can also create them literally and you will got already an instance.
//In JS functions play the roll of classes





