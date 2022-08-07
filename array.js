var arr = [10, 20, 30, 40]
arr.unshift(5)
console.log(arr);
arr.shift()
console.log(arr);


// Problem 1
var fruits = ['Apple', 'Banana', 'Orange']
console.log(fruits.indexOf('Apple'))
fruits[1]='Mango'
console.log(fruits)
fruits.splice(2,1,'watermelon')
console.log(fruits)

// Problem 2
var a = 28
var b = 19
var c =20

if (a > b && a > c)
{
    console.log(+a+' is the largest number')
}
else if (b > a && b > c)
{
    console.log(+b+' is the largest number')
}
else{
    console.log(+c+' is the largest number');
    
}

// Isoceles program
var x = 9
var y = 10
var z = 9

if(x == y || x == z || z == y){
    console.log('This is isoceles triangle');
    
}
else{
    console.log('Sorry!!!!!!!!! you are given a wrong number')
}

// Gradding program
var my_grade = 101
var tom_grade = 70
var jerry_grade = 60

var point = (my_grade >= 80 && my_grade <= 100) ? 'Wow!!! you are obtaining GPA-5' : 'oops!!Your result is not publish yet'
console.log(point);
