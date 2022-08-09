/*
27) Write a function called make_avg() which will take an three integers and
return the average of those values.
*/

function make_avg(a,b,c){
    const average = Math.round((a + b + c)/3)
    return {
        'The average number of given inputs is':average
    }
}
const num1 = 10
const num2 = 20
const num3 = 24
const getAverage = make_avg(num1,num2,num3)
console.log(getAverage)