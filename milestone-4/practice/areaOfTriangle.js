/**
 * Write a function to find the area of triagnle if you are give the 3 sides value of triangle
 * 
 * In order to find the area of a triangle with 3 sides, we use the Heron's formula which says if a, b, and c are the three sides of a triangle, then its area is,

Area = √[s(s-a)(s-b)(s-c)]

Here, "s" is the semi-perimeter of the triangle, i.e., s = (a + b + c)/2.
 */

function getArea(a, b, c){

    const s = (a + b + c)/2 // Here, "s" is the semi-perimeter of the triangle.
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return{
        'The area of triangle is':Number(area.toFixed(2))
    }

}
// Given value of three sides
const a = 3
const b = 6 
const c = 7 

const araOfTriangle = getArea(a, b, c)
console.log(araOfTriangle)