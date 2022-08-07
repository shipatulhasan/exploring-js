function getArraySum(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        const index = i
        const element = arr[index]
        sum+=element
        console.log(index,element)
    }
    return sum
}
const array = [12, 2, 20, 30, 22, 55]
const myArraySum = getArraySum(array)
console.log(myArraySum)


function getOddArray(arr){
    const oddArray = []
    for(let i = 0; i<arr.length; i++){

        const element = arr[i]
        if(element % 2 !== 0){
            oddArray.push(element)
        }
    }
    return oddArray
}
const array2 = [12, 65, 45, 78, 32, 45, 91 ]
const myOddArray = getOddArray(array2)
console.log(myOddArray);
const myOddArraySum = getArraySum(myOddArray)
console.log('Odd Number Sum'+myOddArraySum)
