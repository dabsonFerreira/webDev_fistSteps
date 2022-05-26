/*[[Prototype]] it is a concept
there is an attribute called prototype tha is only available in Object (a function)
*/

const Toyota = {
    model: 'SW4 Diamond',
    maxSpeed: 200
}

const Mercedes = {
    model: 'AMG G63 G Wagom',
    maxSpeed: 240
}

console.log(Toyota.__proto__)//the two _ in both side make it research in all the chair of prototypes
//for an "object father" that this object inherited its structures.
console.log(Toyota.__proto__ === Object.prototype)//all objects point to this function Object
//Object.prototype is the highest level prototype


//Prototype Chain
Object.prototype.att0 = 0 //Avoid it!

const grandfather = {att1 : 'A'}
const father = {__proto__: grandfather, att2 : 'B', att3: '3'}
const son = {__proto__: father , att3 : 'C'}

console.log(son.att0, son.att1, son.att2, son.att3)//even the attribute from prototype it can access

//ANOTHER WAY TO DECLARE

const car = {
    currentSpeed: 0,
    maxSpeed: 200,

    accelerate(delta){
        if (this.currentSpeed + delta <= this.maxSpeed) {
            this.currentSpeed += delta
        }
        else{
            this.currentSpeed = maxSpeed
        }
    },

    status(){
        return  `${this.currentSpeed}Km/h de ${this.maxSpeed}km/h`
    }
}

const ferrari = {
    model: 'F40',
    maxSpeed : 324 //shadowing   
}

const volvo = {
    model: 'V40',
    status(){
        return `${this.model}: ${super.status}`//method override
    }
}

Object.setPrototypeOf(ferrari,car)//defines the prototype relation
Object.setPrototypeOf(volvo,car)

//============================heritage=================================//
const father2 = {name: 'Brian', hairColor: 'black'}

const daughter1 = Object.create(father2)
console.log(daugther1.hairColor)

const daughter2 = Object.create(father2, {
    name: {value: 'Bia', writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Cassandra'
console.log(`${daughter2.name} has hair color ${daughter2.hairColor}`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for(let key in daughter2){
    daughter2.hasOwnProperty((key))?
        console.log(key) : console.log(`by inheritance: ${key}`)
}