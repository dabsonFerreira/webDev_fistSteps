const manufacturer = ["Mercedes", "Audi", "BMW"]

function print(name, index){
    console.log(`${index+1}. ${name}`)
}

manufacturer.forEach(print)
manufacturer.forEach(manufacturer => console.log(manufacturer))
