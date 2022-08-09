/**
 * Find the second largest element of an array
 */

function getSecondLargest(arr){
    let largest = arr[0]
    let secondLargest = arr[0]

    for(let i = 0; i<arr.length; i++){
        const element = arr[i]

        if(element > largest){
            secondLargest = largest
            largest = element
        }
        else if(element > secondLargest && element != largest){
            secondLargest = element
        }
    }
    return {
        'Given Array':arr, 'The Largest Element Of This Array Is':largest, 'The Second Largest Element Of This Array Is':secondLargest
    }
}

const myArray = [12, 2, 4, 30, 22, 17, 39, 39, 20]
const secondLargestElement = getSecondLargest(myArray)
console.log(secondLargestElement)