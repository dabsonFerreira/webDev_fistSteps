function purchase (work1, work2){

    const byIceCream = work1 || work2
    const byTv = work1 && work2 
    const byConsole = work1 != work2 //the difference is equal to xor
    const stayHealth = byIceCream

    return {byIceCream, byTv, byConsole, stayHealth}//you need to pass an object to send lots of variables by function
    // internally JS is doing: byIcecream : byIcecream, byTv : byTv etc => object = key&value
}