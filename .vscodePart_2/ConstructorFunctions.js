function car (maxSpeed = 200, delta=5){
    //Private Method
    let currentSpeed = 0

    //Public Method
    this.SpeedUp = function(){
        if(currentSpeed + delta <= maxSpeed){

            currentSpeed += delta

        }
        else{
            currentSpeed = maxSpeed
        }


    }

    //Public Method

    this.getCurrentSpeed = function(){
        return currentSpeed
    }
}

//instantiating
const uno = new car   
uno.speedUp()
console.log(uno.getCurrentSpeed())//the initial velocity was 0 then it shall print the value 5

const ferrari = new car(350, 20)
ferrari.speedUp()
console.log(ferrari.getCurrentSpeed())