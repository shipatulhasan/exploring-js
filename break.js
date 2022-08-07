// var numbers = [23, 45, 20, 40, 100, 50, 33, 64]

// for(var i = 0; i< numbers.length; i++){
//     var number = numbers[i]
//     if(number > 50){
//         continue
//     }
//     console.log(number)
// }

// var students = ['Shakib', 'Rakib', 'Arif', 'Avi', 'Sunny']
// for(var i = 0; i<students.length; i++){
//     if(i > 2){
//         break
//     }
//     console.log(students[i])
// }
let arr = [10, 55, 12, 14, 77, 58, 18, 18, 15, 46, 29, 52, 78];
let index = 0;
while (index < arr.length-1) {
    

if (arr[index] >18) {
    index++;
    continue;
}

console.log(arr[index]);
index++;




}
