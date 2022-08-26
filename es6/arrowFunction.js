const sum = (a,b,c) => a+b+c
console.log(sum(1,2,4))

const getAverage = (arr) =>{
    let sum = 0
    for(const elements of arr){
        sum+=elements
    }
    const avrage = sum/arr.length
    return {sum,avrage}
}

const arr1= [1,2,3,4,5]
const summetion = getAverage(arr1)
console.log(summetion)


/**
 * Write an arrow function that will take 2 parameters: One parameter
    will come from you and the other parameter will be a default
    parameter. Add these two parameters and return the result.
 */

const add = (a, b=10) => a + b
const addition = add(50)
console.log(addition)


// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const getMultiplication = (a, b, c) => a * b * c
const result = getMultiplication(3, 5, 10)
console.log(result)

/**
 * Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result
 */

const getEvenFriends = (arr) => {
    const evenFriend = []
    for(const name of arr){
        if(name.length % 2 === 0){
            evenFriend.push(name)
        }
    }
    return evenFriend
}
const myFrinds = ['Avishekh','Momin','Sunny','Momin','Amirul']
console.log(getEvenFriends(myFrinds))

/**
 * Write an arrow function where it will do the following:
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements
 */

const averageSquared = (arr) => {
    let sum = 0
    for (element of arr){
        element = Math.pow(element,2)
        sum = sum + element
    }
    const avg = sum / arr.length
    return avg

}
const squareArr= [1,2,3,4,5]
const avgSquareArr = averageSquared(squareArr)
console.log(avgSquareArr)


/**
 * Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the
    result
 */

const maxNumber = (arr1,arr2) => {
    const newArr = [...arr1,...arr2]
    const maximumNumber = Math.max(...newArr)
    console.log(maximumNumber)
}

const numArr1 = [1,2,3,4,5]
const numArr2 = [2,5,7,100,15]
maxNumber(numArr1,numArr2)