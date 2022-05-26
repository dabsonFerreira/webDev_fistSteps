//function setInterval() triggers a function. You can pass also an anonymous function
function person(){
    
    this.age = 0    
    setInterval(function(){
        this.age++
        console.log(this.age)    
    },1000)
}

new person

//this function will return a NaN... it is because of the setInterval that is pointing to a counter



function person1(){
    
    this.age1 = 0    
    setInterval(function(){
        this.age1++
        console.log(this.age1)    
    }.bind(this),1000)
}

new person1

//this function will have 'this' pointing for age... which is what we want. Another way of doing it:

function person2(){
    
    this.age2 = 0 
    const self = this   
    setInterval(function(){
        self.age2++
        console.log(self.age2)    
    },1000)
}
//self is always pointing to person
new person2