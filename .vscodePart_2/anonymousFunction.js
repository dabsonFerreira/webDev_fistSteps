const sum = function(a,b){
    return a + b
}

const printResult = function(a,b, operation = sum){
    console.log(operation(a,b))
}
printResult(2,3)
printResult(2,3,sum)
printResult(2,3, function(x,y){

    return y-x
})
printResult(2,3, (x,y) => x*y)