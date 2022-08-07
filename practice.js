// 1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

// function foo(){
//     console.log('foo')
//     bar()
// }
// function bar(){
//     console.log('bar')
// }
// foo()

// 2) Write a function called make_avg() which will take an three integers and return the average of those values.

// function make_avg(a, b, c){
//     var avg = (a + b + c)/3
//     return avg
// }
// var average = make_avg(2, 3, 5)
// console.log('Average of those numbers is \n'+ average.toFixed(2))

// 3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_array_avg(arr){
    var average = 0
    var sum = 0
    for(var i =0; i<arr.length; i++){
        sum += arr[i]
    }
    average = sum / arr.length
    return average
}
var arr1 =[1, 2, 4, 5]
var averageCount = make_array_avg(arr1)
console.log(averageCount)

// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:


// ● Has return + Has parameter

function even_odd(n){
    if(n%2 == 0){
        return (n+' is an even number')
    }
    else{
        return (n+' is an odd number')
    }
}

var number = even_odd(5)
console.log(number);


// ● No return + Has parameter

function odd_even(a){
    if(a % 2 !== 0){
        console.log(a+' is an odd number')
    }
    else{
        console.log(a+ ' is an even number')
    }
}
odd_even(15)


// switch
var signal = 'red'
switch(signal){
    case 'green':
        console.log('You should cross the road.')
    break

    case 'red':
        
        console.log('Hold on');
    break
    default:
        console.log('Not to hurry when you are crossing the road');
        
        
}