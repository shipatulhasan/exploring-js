
    function isLeapYear(year){
        let myYears = []
        for(let i = 0; i<year.length; i++){
            const element = year[i]

            if((element % 400 == 0) || ((element % 4 ==0)&&(element % 100 != 0))){
                myYears.push(element)
            }
        }
        if(myYears.length==0){
            myYears.push('None of the years you have given are leap years')
        }
        return myYears
}

var arr = [2002, 2023, 1900, 2030, 2011,]
var hello = 'Hello, Thank you for your question. Give us some time. Your result is processing\n'
var getResult = isLeapYear(arr)
console.log(hello,getResult)