//function is a block code

function printSum(a,b){

    console.log(a + b)

}

printSum(2,3)
printSum(2)
printSum(1,2,3,4)
printSum() //every one is possible, there is no error in compiling

//------------------------ RETURNING FUNCTION --------------------------------------//

function sum(a,b=3){//the default for b the value is 3 - it will be attributed when no value is set

    return a + b

}

console.log(sum(2,3))
console.log(sum(2))
console.log(sum())//result in NaN


// -------------------------- Storing a function in a variable ---------------------------------//

const constSum = function (a,b){ // the constant is receiving an anonymous function
    console.log(a+b)
}

constSum(2,3)
console.log(constSum)

//------------------- Using an arrow function for the same procedure ----------------------------//

const sum2 = (a,b) => {

    return a + b
}

console.log(sum2(3,6))

// ---------------------------------- Implicit Return --------------------------------------------//

const subtraction = (a,b) => a - b //without braces must have just one line 
//the result of one unic sentence will be returned
console.log(subtraction(3,4))

const print = a => console.log(a)
print('printing') 