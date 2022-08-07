// Requirement of scic
// Each assignment Number must be 50% and avg number is 50

var marks = [40, 60, 60, 10]
var total_marks = [60, 60, 60, 30]
var avgMarks = 0
var isFiftyParcent = false
for(i = 0; i<total_marks.length; i++){
    avgMarks+=marks[i]/marks.length //Avg marks
    // If  you need to find parcentage

    /*var parcentage = (marks[i]/total_marks[i])*100 */ //Parcentage check for all assignment individually

    // console.log(parcentage)
    if(marks[i]>=total_marks[i]/2){
          isFiftyParcent = true 
      }
      else{
          isFiftyParcent = false
      }
}

// console.log(avgMarks)

if(avgMarks>=50 && isFiftyParcent==true){
    console.log('\n*****************\n\nMashallah.. You got the chance in our SCIC Batch 6\n\n*****************\n');  
}
else if (!isFiftyParcent){
    console.log('\n-------------\nOpppps!!!!!!!!!!!!!!! You do not have 50% marks in all assignments\n-------------\n\nSo you are not eligible to join our SCIC Group\n\n-------------\n ')
    
}
else{
    console.log('\n-------------\nOpps!! You have met the first requirement and obtained 50% in all assignments but do not meet the average mark criteria.\nYou must obtain an average of at least 50.\n-------------\n\nSo you are not eligible to join our SCIC Group\n\n-------------\n ');
    
}

        
