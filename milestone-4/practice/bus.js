let people = 309;
let price = 1;

let remainder50 = people % 50;
let remainder11 = remainder50 % 11;
let restPeople = remainder11

if (restPeople > 0 && restPeople < 11) {
    price = restPeople* 250;
    console.log(price)
}

else if (remainder11 == 0 || remainder50 == 0) {
    price = 0;
    console.log(price)
   
}
else if (remainder50 < 11) {
    restPeople = remainder50
    price = remainder50 * 250;
    console.log(price)

}