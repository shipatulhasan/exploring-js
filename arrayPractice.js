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
// write a program to where you will take an array as an input and show all the element of this array if program found any negetive value in your array then break.

function getArray(arr){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<0){
            break
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr
    
}

const arr = [10, 20, 11, 2220, 220, 12, -1, 20, 40, 30, 22]
const myArray = getArray(arr)
console.log(myArray)