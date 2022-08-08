// Unique nummber
// using indexof. In this method you have to check whether condition is true.
var numbers = [1,2,2,4,4,3,5,6,7,7,9,10]
var unique = []
for(var i = 0; i<numbers.length; i++){
    if(unique.indexOf(numbers[i]) === -1){
        unique.push(numbers[i])
    }
    
}
console.log(unique.sort())

//Using inclues
// If you use includes then you have to check whether condition is false.
function removeDucplicate(names){
    const newArray = []
    for(let i = 0; i<names.length; i++){
        const name = names[i]
        if(newArray.includes(name) === false){
            newArray.push(name)
        }
        
    }
    return newArray
}

const names = ['abul', 'shakib', 'abbusi', 'hasan', 'abul', 'shaon', 'shakib', 'avi', 'sayanty', 'abbusi', 'momin', 'momin', 'hasan', 'avi', 'sunny', 'sunny', 'shakib', 'abul']

const getUniqueNames = removeDucplicate(names)
console.log(getUniqueNames)