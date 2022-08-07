// Multiple table
function table(n){
    var sum = ''
    console.log('\nThe multipication table of '+n+'******************\n')
    for(var i = 1; i<=10 ; i++){
        sum+=(i+' * '+n+' = '+i*n+'\n\n')
        // return (i+' * '+n+' = '+sum+'\n')
    }
    return sum
}

var multiplication =table(12)
console.log(multiplication+'\n')

function number(n){
    console.log('The multipication table of '+n+'******************\n')
    for(var i=1; i<=10; i++){

        var sum = i*n
        console.log(i+' * '+n+' = '+sum+'\n')
    }
}
number(13)

