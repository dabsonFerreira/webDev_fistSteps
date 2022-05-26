//Var isn't limited in a scope (there is no block scope), but let is! Var acts like a global variable
console.log('printing let')
let number = 1
console.log(number)
{
    let number = 2
    console.log(number)

}

console.log(number)


console.log('printing var:')
var number1 = 1
console.log(number1)
{

    var number1 = 2
    console.log(number1)

}
console.log(number1)

//------------------------------------------USING LOOP--------------------------------------------//

console.log('Now it is about loop')

console.log('var')
for(var i = 0; i < 10; i++){
    console.log(i)
}

console.log(i)

console.log('let')
for(let t = 0; t < 10; t++){
    console.log(t)
}

//console.log(t) //it will result in an error

//---------------------------------------LOOP----------------------------------------//

const funcs = []

for (var i = 0; i < 10; i++){

    funcs.push(function(){
        console.log(i)
    })

}

funcs[2]()
funcs[3]()//var doesn't have memory so only will have the last value of i


const funcs1 = []

for (let i = 0; i < 10; i++){

    funcs1.push(function(){
        console.log(i)
    })

}

funcs[2]()
funcs[3]()//the result will be different using let 