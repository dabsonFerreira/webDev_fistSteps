 /*In JS the this depend on how you call the function. It can point to a very different thing
 depending on how you call it*/

 //to this point just for the context where it is called you must use arrow function.

 /*this can be problematic also about attributes. If you save some in a variable, this will change
 the scope where it is originally pointing, like if it is used for that attribute in an object:*/

 const person = {

    greetings: 'good morning!',
    talk(){//another way, and more recente, to set an attribute
        console.log(this.greetings)
    }
 }

 person.talk()
 const talk = person.talk
 talk()//it will result in undefined. This is not more part of person then it is pointing to another thing
 
 const talkperson = person.talk.bind(person)//the function bind will make the this in talkperson point "to person"
 talkperson()

 
 function person2(){
    
    this.age2 = 0 
    
    setInterval(() => {
        this.age2++
        console.log(this.age2)    
    },1000)
}
//this is part of the lexical context of person because of the arrow function inside person
new person2