// write a program to get summation of an array. 
// Has paremeter + Has return

function getSum(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
       console.log(sum,'+',arr[i],'=',(sum=sum+arr[i]))
    }
    return sum
}
const arr1 = [12, 30, 20, 11, 55]
const mySum = getSum(arr1)
// console.log('Here is the summetion of given input: ', mySum)

let a = 'Iphone'
let b = 'iphone'
if(a==b){
    console.log('true');
    
}
else{
    console.log('false');
    
}
