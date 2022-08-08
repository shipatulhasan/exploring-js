//Which number in bigger

// var a = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 69, 10];
// var temp = 0
// for(var i = 0; i<a.length; i++){
//    if(a[i]>temp){
//        temp = a[i]
//    }
// }
// console.log(temp)

// উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// var temp = friends[0]
// for(var i = 0; i<friends.length; i++){
//     var name = friends[i]
//     if(name.length>temp.length){
//         temp = name
//     }
// }
// console.log(temp+" is the largest name among all")

function getSecondHighest(arr){
let highest = arr[0]
let seHighest = arr[0]
for(let i = 0; i<arr.length; i++){
    let number = arr[i]
    if(number > highest){
        seHighest = highest
        highest = number
    }
    // else if(highest > number && number > seHighest){
    //    seHighest = number
    // }
    else if(highest != number && number > seHighest){
       seHighest = number
    }
}return {highest, seHighest}
}
let arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 69, 39, 69,69,69]
let secondHighest = getSecondHighest(arr)
console.log('The overall result is given below\n',secondHighest)

// alternative but not working in various element
function secHighest(arr){
    if(arr.length<2){
        return 'Please insert at least 2 element to check second highest element'
    }
   const sort= arr.sort(function(a , b){
        if(a > b){
            return 1
        }
        else if(a < b){
            return -1
        }
        else{
            return 0
        }
    })
    let temp = 0
    for(let i = 0; i<sort.length-2; i++){
        const element = sort[i]
        if(!(element >= sort.length-2[i]) ){
            temp = element
        }
    }
    return temp
    
}
let arr2 = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 69, 39, 69,69,69,69]
let secondHigh = secHighest(arr2)
// console.log(secondHigh)
