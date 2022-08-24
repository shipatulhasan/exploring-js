function factorial(number){
    
    if(number == 1){
        return 1
    }
    console.log(number)
    return number * factorial(number - 1)
}
const myFactorial = factorial(5)
console.log(myFactorial)


function sum(i){
    if(i==1){
        return 1
    }
    return i + sum(i - 1)
}
const mySummetion = sum(5)
console.log(mySummetion)