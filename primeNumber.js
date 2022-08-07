// prime number only divisable by 1 and itself that's why we can simply justify prime by using a for loop

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
console.log(number,myPrime)