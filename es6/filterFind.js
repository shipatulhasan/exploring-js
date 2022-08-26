const myFrinds = ['Avishekh','Momin','Sunny','Momin','Amirul','sayanty']

const evenFriends = myFrinds.filter(friend => friend.length % 2 ==0)
console.log(evenFriends)


const findLargest = myFrinds.find(friend => friend.length % 2 ==0)
console.log(findLargest)

/**
 * now the difference of filter and find. Find will give us one element. if multiple elements mathced the condition dosen't matter find will give us first one.
 */