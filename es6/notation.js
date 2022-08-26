const student = {
    name:'Hasan',
    marks: {
        math: 85,
        physics: 80,
        chemistry: 75,
    }
}

const marks = student.marks

const math = student.marks.math
console.log(math)

const subject = 'chemistry'
const subjectMarks = student.marks[subject]
console.log(subjectMarks)