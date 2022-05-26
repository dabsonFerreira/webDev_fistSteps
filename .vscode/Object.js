const product1 = {}//you can create dinamically an object like defining later its contents. 
product1.name = 'Object in JS'
product1.price = 100

console.log(product1)

const product2 = {

    name: 'whatever',//observe that you need to put comma and use : not =
    obj: {
        name : 'you can put an obj inside another',
        obje: {
            name  : 'there can be only objects with exclusive name... ',
            name2 : 'but you can put inside one object another one with the same name,',
            name3 : ' as long as it is unic in that object'
        }
    }
}