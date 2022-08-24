/**
*Write a program to calculate paper requirement. 
to print 1st book page needed --> 100
to print 2nd book page needed --> 200
to print 3rd book page needed --> 300
write a function named paperRequirements and return the total number of pages need. function perameter will be 3.
 * 
 */

function paperRequirements(b1, b2, b3){
    const pagesFor1stBook = 100
    const pagesFor2ndBook = 200
    const pagesFor3rdBook = 300
    const toPrintFirstBook = pagesFor1stBook *b1
    const toPrintSecondBook = pagesFor2ndBook *b2
    const toPrintThirdtBook = pagesFor3rdBook *b3
    const totalPaperNeeded = toPrintFirstBook + toPrintSecondBook +toPrintThirdtBook

    return{
        'Papers required for first book\'s are ':toPrintFirstBook,
        'Papers required for second book\'s are ':toPrintSecondBook,
        'Papers required for third book\'s are ':toPrintThirdtBook,
        'Total paper required to print all the books are':totalPaperNeeded
    }
}

const numberOfBook1 = 2
const numberOfBook2 = 0
const numberOfBook3 = 1
const totalPaperRequired = paperRequirements(numberOfBook1,numberOfBook2,numberOfBook3)
console.log(totalPaperRequired)