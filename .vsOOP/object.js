// An object is a dinamic collection of key/product pairs
const product = new Object 
product.name = 'chair'
product['productBrand'] = 'generic'
product.price = 100

console.log(product)
delete product.price
delete product['productBrand']
console.log(product)

const car = {

    model: 'Vogue',
    value: 723100,
    owner: {
        name: 'Bernard',
        age: 52,
        address:{ 
            street: 'Perfect Private',
            number: 123
        }
    },

    drivers: [{
        name: 'Peter',
        age: 58
    },{
        name: 'Yuir',
        age: 18
    }],

    insuranceCalculator: function(){
        //
    }

}

//end of object
//accessing:

car.owner.address.number = '12h3a5'
car['owner']['address']['street'] = 'Jardim Independente 1'
console.log(car)

//using delete:
delete car.drivers
delete car.owner.address
delete car.insuranceCalculator
console.log(car)
console.log(car.drivers)//you can try access without an error an nonexistente/deleted attribute
//but it will result in error if you try to access a propertie from this nonexistente attribute


//=============================== WAYS TO CREATE AN OBJECT =====================================//

//by literal notation:

const obj1 = {}
console.log(obj1)

//object in JS
const obj2 = new Object();
console.log(obj2)

//Constructor Function

function obj3(name, price, desc){
    this.name = name

    this.getProductDescount = () => {
        return price*(1-desc)
    }
}

const p1 = new obj3('can', 120, 0.12)
const p2 = new obj3('pen', 12, 0.05)
console.log(p1.getProductDescount(), p2.getProductDescount())

//factory function

function createEmployee(name, salaryBase, absc){
    return{
        name, 
        salaryBase,
        absc,
        getSalary(){
            return (salaryBase/30)*(30-absc)
        }
    }
}

const f1 = createEmployee('John', 12200, 8)
const f2 = createEmployee('Fabian', 8700, 3)
console.log(f1.getSalary(), f2.getSalary())

//Object.create
const daughter = Object.create(null)
daughter.name = 'Julia'
console.log(daughter)

//a famous function that returns an object

const FromJson = JSON.parse('{"info": "Im a JSON"}')
console.log(FromJson.info)