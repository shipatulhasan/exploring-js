/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
*/

function getAvgMarks(s1,s2,s3,s4,s5){
    const totalMarks = s1 + s2 + s3 + s4 + s5
    const avgMark = totalMarks/5
    return {'Mathemetics':s1,'Physics':s2,'Chemistry':s3,'Biology':s4,'Bangla':s5,'Total average marks':avgMark}

}
const math = 80
const phy = 75
const chem = 70
const bio= 78
const ban = 83
const myAvegMarks = getAvgMarks(math,phy,chem,bio,ban)
console.log(myAvegMarks)
