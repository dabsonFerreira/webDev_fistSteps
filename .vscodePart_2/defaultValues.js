function sum (a, b, c ){
    a = a || 1//it is common used until today
    b = b || 1
    c = c || 1

    return a + b + c
}

/*
the problem in this way of setting variables is that if you try to set the value 0 
case it will be read as false and then a = 1 b = 1 etc.
*/

console.log(sum()), console.log(sum(3)), console.log(sum(1,2,3), console.log(sum(0,0,0)))

//==============================================================================
function sum2(a, b, c){

    a = a !== undefined ? a : 1//you aren't expecting the user to set the value as undefined
    b = 1 in arguments ? b : 1//if there is a argument in the position 1 take it or set b = 1
    c = isNaN(c) ? 1 : c//the oldest more secure! If c is not a number set 1, otherwise set c
    
    return a + b + c

}

console.log(sum2()), console.log(sum2(3)), console.log(sum2(1,2,3), console.log(sum2(0,0,0)))

//--------------------------------------setting standard value-------------------------------------
//es2015
function sum3(a = 1, b = 1, c = 1){

    return a + b + c

}

console.log(sum3()), console.log(sum3(3)), console.log(sum3(1,2,3), console.log(sum3(0,0,0)))
//the most secure and adequated mode to use