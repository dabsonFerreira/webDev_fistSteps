console.log('(01)', '1'== 1)// you are intersted in the value, not the type
console.log('(02)', '1'=== 1) // you are also intersted in the type
console.log('(03)', '1'!= 1) // same as 01
console.log('(04)', '1'!== 1) // same as 02

console.log('(05)', '2' < 1)
console.log('(06)', '2' > 1)
console.log('(07)', '2'<= 1)
console.log('(08)', '2'<= 1)

const d1 = new Date(0) // 1/1/1970
const d2 = new Date(0) //it will result in false because it is using memory address
console.log('(09)', d1 ==d2)
console.log('(10)', d1 ===d2)

console.log('(11)', d1.getTime() === d2.getTime())
console.log('(12)', d1.getTime() == d2.getTime())

console.log('(13)', undefined == null)
console.log('(13)', undefined === null)

//It's better to use === strictly equal
