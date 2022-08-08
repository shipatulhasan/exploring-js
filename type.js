const country = 'Bangladesh'
const isIndependent = true
const friends = [12, 13, 18, 20, 22, 25, 28]
const students = {id: 1232, name: 'Shakib', age: 25}
console.log(typeof country)
console.log(typeof isIndependent)

// we can't use type of to the array type. We have to use different method. Let's see whta we need to use here.

// console.log(typeof friends)//return it's an object but it's not an object.

console.log(Array.isArray(friends))


console.log(typeof students)


// concat method

const newFriends = [20, 21, 24, 28]
const allFriends = newFriends.concat(friends)
console.log(allFriends);


// Serch elements in array or in string by using includes

console.log(allFriends.includes(30))

allFriends.includes(30)==true ? console.log('Yes this he is here') : console.log('sorry he is missing')