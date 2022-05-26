/*1)  create a function that recieves two values and show its sum, subtract, mutiplication and division in the console
*/
function basicOperations(value_x,value_y){
    console.log(`sum:            ${value_x + value_y}            subtract: ${value_x - value_y}
                 multiplication: ${value_x * value_y}            division: ${value_x / value_y}`  )
}

basicOperations(9,3)

/*
2) create a function that receives the length of the three sides of a triangle and return the 
triangle classification as to the size of its sides.
*/

function triangleClassification (triangleSide_a, triangleSide_b, triangleSide_c){

    if ((triangleSide_a == triangleSide_b&&triangleSide_a!=triangleSide_c)||(triangleSide_b==triangleSide_c&&triangleSide_b!=triangleSide_a)||(triangleSide_a==triangleSide_c&&triangleSide_a!=triangleSide_b))
        return 'isosceles triangle'
    else
        if ((triangleSide_a==triangleSide_b)&&triangleSide_a==triangleSide_c)
            return 'equilateral triangle'
        else            
            return 'scalene triangle'
}

console.log(triangleClassification(7,3,5))//expects a scalene triangle
console.log(triangleClassification(7,7,5))//expects a isosceles triangle
console.log(triangleClassification(7,7,7))//expects a equilateral triangle

/*3) create a function that recieves 2 parameters, base and exponent, and return base
 to the power of exponent*/

function exponential(base, exponent){
    return Math.pow(base,exponent)
}

console.log(exponential(2,3))

/*create a function that receives 2 values (dividend and divisor) and prints the result and the remainder 
of the division of these two values*/

const quotientRemainder = (dividend,divisor) => {
    console.log(`result: ${dividend/divisor}  reminder: ${dividend%divisor}`)
}

quotientRemainder(4,2)//expects result: 2 and remainder: 0 

/*
5)
*/