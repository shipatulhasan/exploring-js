var mobile={
    name: 'Mi Phone',
    price: 18800,
    color: 'Black',
}
var propertyName = Object.keys(mobile)

var propertyValues = Object.values(mobile)
console.log(mobile.price)
console.log(propertyName)
console.log(propertyValues)

// Shopping cart
 var shoppingCart = {
     pen: 5,
     papper: 6,
     light : 3,
     egg : 10,
     chocolate : 4
 }
//When you know the exact name of properties of an object
 var chocolateCount = shoppingCart.chocolate//dot notation
//  console.log(chocolateCount);
// Alternative

var chocolateCount2 = shoppingCart['chocolate']//Array notation

    console.log(chocolateCount2);

var propertyName = 'chocolate'
var propertyValues = shoppingCart[propertyName]
    console.log(propertyName, propertyValues)
 

// Set property values
shoppingCart.egg = 15
console.log(shoppingCart)
shoppingCart['pen'] = 8
console.log(shoppingCart)
shoppingCart[propertyName] = 12
console.log(shoppingCart)


// 
