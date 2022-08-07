// factorial in nothing but a summetion of a multiplication table form 1 to given number
// 7! = 7*6*5*4*3*2*1

function factorial(number){
    let sum = 1
    for(let i =1 ; i<=number ; i++){
        sum*=i
    }
    return sum
}
const number = 7
const myNumber = factorial(number)
console.log('Factorial of '+number+'! =' ,myNumber)