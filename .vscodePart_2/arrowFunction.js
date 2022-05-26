//Arrow function must be used with variables/constants and is always anonyous
let double = (a) => { return a*2}//use parentheses if there are more than one parameter. 
double = a => a*2 //no need for braces if you are having only one sentence -> it will be the also the return
console.log(double(Math.PI))

//a function with no return you can use empty parentheses or use underscore
hello = () => 'hello'
hello = _ => 'hello'//in this case the parameter is dash but JS allow you to ignore it as a parameter
console.log(hello())

//using this kind of function will allow you to have on unic this that point to this function



