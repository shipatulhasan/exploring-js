// var str = 'why so serious'
// // var arr = str.split('')
// let find = 'hy'
// isFound = false
// // console.log(arr.length)
// for(var i=0; i<str.length; i++){
//     if(str[i]===find){
//         console.log('yes')
//         isFound = true
//         break
//     }
   
// }
// if(!isFound){
//     console.log('no')
// }


//includes search in sting
const str1 = 'why so serious'
const find1 = 'w'
const search = str1.includes(find1)
console.log(search)

// includes search in array

const arr = ['pet', 'cat']
const find2 = 'et'
const found = arr.includes(find2)
console.log(found);


// search index of

const str = 'Hello! how are you? what\'s going on???? '
const find  = 'Hello'
const result = str.indexOf(find)!== -1 ? 'ya it\'s on the string' : 'Sorry wrong search'
console.log(result)