const person = {name: 'John'}
person.name = 'Peter'
console.log(person)//also person is a constant, you can alterate its attributes. It's because
//you are not changing the reference in which name is pointing.
//but you can also make an object a constant:
Object.freeze(person)//now you cannot change no values inside the address of each attribute.

//to create a frozen object:
const constantPerson = Object.freeze({name: 'John'})
constantPerson.name = 'Aruan'
console.log(constantPerson)