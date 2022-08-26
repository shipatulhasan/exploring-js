const myFrinds = ['Avishekh','Momin','Sunny','Momin','Amirul']

const arr = []
const evenFriends = myFrinds.map(friend => {
if(friend.length % 2 ==0){
    arr.push(friend)
}
})
console.log(arr)