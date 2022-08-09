/*
28) Challenging: Write a function called make_avg() which will take an array of
integers and the size of that array and return the average of those values
*/

function arrayAvg(arr){
    let sum = 0
    let i = 0
    while(i<arr.length){
        sum+=arr[i]
        i++
    }
    const average = sum/arr.length
    return {
        'The average given inputs is':average
    }

}

const numbers = [12, 20, 20, 40, 21, 22]
const getAverage = arrayAvg(numbers)
console.log(getAverage)