// Practice Problem map(), filter(), find()

/**
 * You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number.
 */
const oddArray = [ 1, 3, 5, 7, 9 ]
function getEvenarray(arr){
    const evenArray = []
    for(let i = 0; i<arr.length; i++){
    const even = arr[i] + 1
    evenArray.push(even)
    }
    return evenArray
}
// console.log(getEvenarray(oddArray))

// now using map method

const evenArr = oddArray.map(element => element+1)
// console.log(evenArr)


/***** ********* ******** ********** ********** ******** ******** */


// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const givenArr = [33, 50, 79, 78, 90, 101, 30 ]
const newArr = givenArr.filter(element => element % 10 ===0)
console.log(newArr)

// Now using find method
const findNum = givenArr.find(element => element % 10 ==0)
console.log(findNum)

/***** ********* ******** ********** ********** ******** ******** */

// Practice Problem reduce()

// You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.
const arr =   [ 1, 9, 17, 22 ]

function addArr(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        sum +=arr[i]
    }
    return sum
}
// console.log(addArr(arr))

// Reduce method apply
const addArrReduce = arr.reduce((previous,current)=>{
    return (previous + current)
},0)
console.log(addArrReduce)


/***** ********* ******** ********** ********** ******** ******** */


/***
 * Challenging Follow above array of objects. So, you have 3 objects as
 array element. Can you find out the total sum from here?
 
 20 + 15 + 22 = 57 . The output will be 57

 What are you thinking? Yeah! Do it with for loop. I know you can do it.
 But! Wait !! Wait !!! Do the same task using array.reduce() method.
 */

const obj = [
    {name:'abul', age:20},
    {name:'kabu', age:15},
    {name:'habul', age:22},
]

const addObj = obj.reduce((previous, current)=>{
    const sum = previous + current.age
    return sum
},0)
console.log(addObj)


/***** ********* ******** ********** ********** ******** ******** */


const student = {
    name: 'Shakib',
    age: 25
}
console.log(student.age)


/***** ********* ******** ********** ********** ******** ******** */

// Practice Problem: Access Object values
/**
 * Console the value of city
 */

const data = {
    location:[
        {
            lattitude: '34.5, 37.8',
            longtitude: '98.7, 58.7',
            city: 'Hyrabad',
            country:'India'
        }
    ]
}

const city = data.location[0].city
console.log(city)

/***** ********* ******** ********** ********** ******** ******** */

const user ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
console.log(user.email)
console.log(user.address)
console.log(user.address['city'])
console.log(user.address['geo']['lat'])
console.log(user.company.name)
