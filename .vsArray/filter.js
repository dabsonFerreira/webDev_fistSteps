//filtering an array to have a sub array with fewer elements

const cart = [
    {name:         'pen',      price:     2.75, fragile: true},
    {name:      'pencil',      price:     1.75, fragile: false},
    {name:    'backpack',      price:    72.75, fragile: false},
    {name:       'glass',      price:    12.75, fragile: true},
    {name:    'notebook',      price: 12200.75, fragile: true}

]


let productFragile = fragile => {
     if (fragile.fragile == true)
        return fragile
}

let productPrice = value => {
    if (value.price >= 3)
        return value
}

//another way

const prodprice = product => product.price >= 3
const prodfragi = product => product.fragile

const expensive = cart.filter(productFragile).map(productPrice)


console.log(expensive)

/*console.log(cart.filter(function(p){
    return logic = p => ((p.price>=3 && p.fragile) == true) ? p.map(p.name) : console.log('ignorado') 

    return 

}))*/
