/*Function is a first class object/citizen or higher-order function => can be treated as a data so:
they can be shared as a parameter, you can return functions, declare one inside another, 
create them literally, you can also store in a variable

Functions receives parameters and return values and, if they don't, they will return "undefined"
*/ 

//Literal form:
function form1() { }

//Store in a variable
const varia = function form2() { }
const form3 = function( ) { } //an anonymous function -> to invoke: varia1()

//Store in an array

const array = [function (a,b){return a+b}, form1, form3]
console.log(array[0](2,3))//executing the function

//Store in an attribute of an object
const obj = {}
obj.talk = function() {return 'Hi'}
console.log(obj.talk())

//Fuction as a parameter
function run(fun){
    fun()
}
run(function (){console.log('Executing...')})

//Function can have and return a function
function sum(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

sum(2,3)(4)//you can send a and b in the first parentheses. The other way of doing this is:
const number = sum(2,3)
number(4)

//------------------------------------PARAMETERS----------------------------------------------//

function sum(){//even if the function doesn't recieve a parameter you can send and it will recive

    let sum = 0;
    for (i in arguments){ // arguments is an array and i is the index of each element in the array 
    
        sum += arguments[i]//arguments has all the passed arguments to the function

    }

    return sum

}

console.log(sum())//you can give no arguments and also whatever amount you want
console.log(sum(1))
console.log(sum(1.1, 1.2, 1.3))
console.log(sum(1.1, 'a', 'b','c'))

//every function has arguments available. When no parameter is given this array is empty
