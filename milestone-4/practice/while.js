// Calculate odd numbers by using while loop

function oddWhile(num1,num2){
    let i = num1
    while(i<=num2){
        if(i%2 !== 0){
            console.log(i)
        }
        i++
    }
}
const initialValue = 7
const finalValue = 19
const myOddNumbers = oddWhile(initialValue,finalValue) 
