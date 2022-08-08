const shoppingCart = [
    {name:'shoe', price: 2000, quantity: 5},
    {name:'shirt', price: 1200, quantity: 2},
    {name:'pant', price: 1200, quantity: 1},
    {name:'t-shirt', price: 900, quantity: 2},
    
]
function totalCost(products){
    console.log('\n********* products you have purches *********\n')
    let cost = 0
    for(let i = 0; i<products.length; i++){
        const product = products[i]
        const name = product.name
        let sum = product.price * product.quantity
        console.log({product:name,quantity:product.quantity,cost:sum}) 
        cost+=product.price * product.quantity
    }
    return cost
}
const myExpenses = totalCost(shoppingCart)
console.log('\n********* You have to pay',myExpenses,'Tk in total *********\n')