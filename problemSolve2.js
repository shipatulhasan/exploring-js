// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var money = 50000
if(money > 80000){
    console.log('Mac kinbo..........!!!!')
}
else if(money > 60000){
    console.log('Gameing laptop kinbo .......... !!!! ');
    
}
else if(money > 40000){
    console.log('Lenevo yoga kinbuuuuuuuuu......... !!!');
    
}
else if (money > 20000){
    console.log('puran laptop kinbuuuu..........!!!!');
    
}
else{
    console.log('Mobile diyei kaj calabuuuuu');
    
}

// আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

var text = 'Aj amar mon valo nei'
for(i= 1; i<=39 ; i++){
    console.log(i+') '+text)
}

// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

var i = 412
while(i<=456){
    console.log('/********----------------***********/');
    console.log(i)
    i+=2
    console.log('/********----------------***********/');
    
}

// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

function odd(a,b){
    
    for(var i=a; i<=b; i+=2){
        console.log(i)
    }
}
odd(581, 623)

// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

topics = ['Html', 'Css', 'Bootstrap', 'Tailwind']

for(i = 0; i<topics.length; i++){
    console.log(topics[i])
}

var date = new Date()

console.log(date.getFullYear())

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

var books = [60, 80, 120, 160, 200, 300, 400, 500,]

function minimum(arr){
    var i = 0
    while(i<arr.length){
    if(arr[i]>200){
        i++
        continue
        }
    console.log(arr[i])
    i++
    }
}
minimum(books)


// Unique nummber
var numbers = [1,2,2,4,4,3,5,6,7,7,9,10]
var unique = []
for(var i = 0; i<numbers.length; i++){
    if(unique.indexOf(numbers[i]) === -1){
        unique.push(numbers[i])
    }
    
}
console.log(unique.sort())

//Leap year
function leapyear(year){
    if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
        console.log(year+ ' is leap year')
    }
    else{
        console.log(year+ ' isn\'t leap year')
    }
}
leapyear(2024)

// ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 

for(var i = 1; i<= 50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i+ ' is devisable for both 3 & 5')
    }
}



