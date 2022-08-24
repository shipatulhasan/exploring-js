// prime number only divisable by 1 and itself that's why we can simply justify prime by using a for loop

// insert a number and program tell you that it's a prime number or not.

function getPrime(num){
    let isPrime = true
        for (let i = 2; i<num; i++){
        
            if(num % i == 0){
                isPrime = false
            }
        }
       
    if(!isPrime){
        return 'is not prime number'
        
    }else{
        return 'is a prime number'
    }
}
const number = 5
const myPrime = getPrime(number)
// console.log(number,myPrime)


// this program will tell you that how many prime number are there in between the given input

function getPrimeNumbers(num){
    const arr =[]
    for(let i = 1; i<num; i++){
        let isPrime = true
        for(let j= 2; j<=parseInt(i/2); j++){
            if(i % j == 0){
               isPrime = false
               break
               
            }
        }
        if(i==1){
            isPrime = false
        }
        
        if(isPrime){
            arr.push(i)
        }
    }
    return arr
}
const prime = getPrimeNumbers(100)
console.log(prime)