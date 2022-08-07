var arr = [1, 4, 5, 7, 10]
for(var i = arr.length-1; i>=0; i--){
    console.log(arr[i]);
}

for(var i = 0 ; i<arr.length/2; i++){

    var temp  = arr[i]//4
    arr[i] = arr[arr.length-1-i]//7
    arr[arr.length-1-i] = temp//
}
console.log(arr)