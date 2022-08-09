/*
7) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else. and switch
*/

function getGrade(marks){
    let result = ''
    switch(true){
        case(marks >= 80 && marks<= 100):
            result = 'Congratulations. you are obtaining A grade'
            break
        case (marks >= 60 && marks < 80):
            result = 'Congratulations. you are obtaining B grade' 
            break
        case (marks >= 50 && marks < 60):
            result = 'Congratulations. you are obtaining C grade' 
            break
        case (marks >= 40 && marks < 50):
            result = 'Congratulations. you are obtaining D grade' 
            break
        case (marks < 39):
            result = 'Opps! you are failed in the examinatio. Need to do more hard work. Next time Inshallah you will pass in the exam' 
            break
        
        default:
            console.log('Your result is processing')
    }
    return result
}
const myGrade = getGrade(80)
console.log(myGrade)