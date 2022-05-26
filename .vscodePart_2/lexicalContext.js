/*
    Functions in JS carries its lexical context. If it is declair in some context, its variable 
    will be part of it
*/

const value  = 'Global'

function function1 (){
    console.log(value)
}

function function2 (){
    const value = 'local'
    function1()
}

function2()//it will print Global becaus function1 was created in the context where
//only Global was declared

console.log('Another example')
const x = 'Global'

function outside(){
    const x = 'local'
    function inside(){
        return x
    }
    return inside
}

const  returnFunction = outside()
console.log(returnFunction())
