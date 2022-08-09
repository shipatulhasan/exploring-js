//  Harry’s mom gave him tk 1000 and asked him to buy some oranges and
// apples. Write a program to help Harry calculate how much money the
// shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
// apples is tk 700

function getReturn(money,cost){

    const totalCost = cost
    const capital = money
    const remainingMoney = capital - totalCost
    return remainingMoney

}

const money = 1000
const totalCostOfFruits = 700
const getReturnFromShopkeeper = getReturn(money,totalCostOfFruits)
console.log('The shopkeeper will return',getReturnFromShopkeeper)