const numbers = [1, 5, 10, 15, 19, 20]
const add = numbers.reduce((previous,current) => {
    const addition = previous + current 
    console.log(previous,current)
    return addition
    
},0)
 
// console.log(add)
function min(nums) { 
    return Math.min(...nums) 
    }
    const arr = [1,3,2]
    console.log(min(arr))