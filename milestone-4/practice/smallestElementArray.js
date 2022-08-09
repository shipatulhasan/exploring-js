
/**Suppose, you have an array with 8 elements. Find the smallest element of
that array.
Now for the previous array, try to find the second largest element.
 */

function getSmallest(arr){

    let smallest = arr[0]
    for(let i = 0; i<arr.length; i++){
        const element = arr[i]
        if(element < smallest){
            smallest = element
        }
    }
    return {
        'given array':arr, 'the smallest element of this array is':smallest
    }

}
const myArray = [12, 2, 4, 30, 22, 17, 39, 20]
const smallestElement = getSmallest(myArray)
console.log(smallestElement)