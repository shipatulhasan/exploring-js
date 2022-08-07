var friendsAge = {
    Hadi : 20,
    Ahad : 23,
    Shakib : 25,
    Hasan : 24,
    Rakib : 25
}
var keys = Object.keys(friendsAge)
// [ 'Hadi', 'Ahad', 'Shakib', 'Hasan', 'Rakib' ]

for(var i = 0; i< keys.length; i++){
    var propertyName = keys[i]
    var propertyValues = friendsAge[propertyName]
    // console.log(propertyName, propertyValues)
}

// we can easily get this fizzy point by using for in loop. Let's check it out. 
// Here var is properties and we can access values by using braket mehod
for (var a in friendsAge){
    n = friendsAge[a]
    console.log(a, n)
}