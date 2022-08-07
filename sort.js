var arr= [1, 10, 3, 4, -1, 0, 22, 12, 18]

arr.sort(function(a, b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0
    }
})
console.log(arr);


var person= [{
        name: 'A',
        age: 26
    },
    {
        name: 'B',
        age: 18
    },
    {
        name: 'C',
        age: 22
    },
    {
        name: 'D',
        age: 24
    }
]

person.sort(function(a, b){

    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(person);
