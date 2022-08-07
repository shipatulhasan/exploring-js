// find leap year

function message(msg){
    function isLeapYear(year){

        if((year % 400 === 0) ||( (year % 4 === 0) && (year % 100 !==0))){
             
            return msg + ' \n' + year + ' is a leap year'+'\n\n**************\n'
        }
        else{
            return msg + ' \n' +year + ' isn\'t a leap year'+'\n\n**************\n'
        }
    }return isLeapYear
}
var hello = message('Hello\nThank you for asking ')
var year26 = hello(2026)
var year27 = hello(2027)
var year28 = hello(2028)
console.log(year26)
console.log(year27)
console.log(year28)


function greetings(greet, name){

    function sayHi(){
        console.log(greet,name)
    }
    sayHi()

}
greetings('Good evining','Shipatul hasan shakib')


// Split function

function something(greet,name){

    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            return ''
        }
    }
    var message = greet+' '+getFirstName()
    console.log(message)
}
something('Good Evening')