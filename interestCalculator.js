// Logic C = p(1+r)^n
// C = চক্রবৃদ্ধি মূলধন, P =  মূলধন, r = মুনাফার হার , n = বছর 

// let n = 2
// let p = 5000
// let r = 10.5

// const profit = (r/100)
// const compoundCapital = p * Math.pow((1+profit),n)
// const compoundInterest = compoundCapital - p

// console.log('my profit = '+profit)
// console.log(compoundInterest)

function coumpoundInterest(p, n, r){
const  profitRate = (r/100)
const c = p * Math.pow((1+ profitRate),n)
const result = c - p
return result
}

let year = 2
let loanAmount = 5000
let profitRate = 10.5
const bankInterest = coumpoundInterest(loanAmount, year, profitRate,) 
console.log('You have to pay '+bankInterest+' for '+loanAmount+' tk loan in '+year+' year ')