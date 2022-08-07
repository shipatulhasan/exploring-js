// Requirement of scic
// Each assignment Number must be 50% and avg number is 50

var marks = [40, 10, 60, 10]
var total_marks = [60, 30, 60, 30]
var avgMarks = 0
var isFiftyParcent = false
for(var i = 0; i<marks.length; i++){
    avgMarks+=marks[i]/marks.length
    var parcentage = (marks[i]/total_marks[i])*100 //Parcentage count
    console.log(parcentage)
}

console.log(avgMarks)


