/**
 * Write a function where to find the largest name in the array. 
 */

function getLargestString(friends){
    let largestName = friends[0]
    for(const element of friends){
        if(element.length < largestName.length){
            largestName = element
        }
    }
    return{
        'Your circle':friends,
        'The largest name among your friend circel is':largestName
    }
    
}
const myFriends = ['Avishekh','Momin','Sunny','Momin','Amirul']
const largestName = getLargestString(myFriends)
console.log(largestName)