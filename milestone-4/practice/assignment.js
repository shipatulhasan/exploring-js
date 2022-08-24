// Problem:1  radianToDegree

function radianToDegree(radian) {

  // validtion Start

  if (typeof radian !== "number") {
    return "please input a number";
  }

  // validtion end

  const pi = Math.PI;
  const result = Number((radian * (180 / pi)).toFixed(2));// logic of conversion
  return result;
}

// Problem:2  isJavaScriptFile 

function isJavaScriptFile(file) {

  // validation start

  if (typeof file !== "string") {
    return "please input a string file extension";
  }

  // validation end

  const doc = file.toLowerCase(); // lowerCase of given string
  const fileType = doc.endsWith(".js");
  if (fileType) {
    return true;
  } else {
    return false;
  }
}

// Problem 3: oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octenQuantity) {

    // validation start
    if(arguments < 0){
      return 'please inter a valid number'
    }
    if (
      typeof dieselQuantity !== "number" ||
      typeof petrolQuantity !== "number" ||
      typeof octenQuantity !== "number"
    ) {
      return "please input numbers";
    }

    // validation end

    const dieselPerLitter = 114;
    const petrolPerLitter = 130;
    const octenPerLitter = 135;
  
    const totalOilPrice =
      dieselPerLitter * dieselQuantity +
      petrolPerLitter * petrolQuantity +
      octenPerLitter * octenQuantity;
    return totalOilPrice;
  }
  console.log(oilPrice(1,-1,1))

//   Problem 4: publicBusFare

function publicBusFare(passenger) {

  // Validation

  if (passenger < 0 || typeof passenger !== "number") {
    return "please enter a valid number";
  }
  // validation end

  let price = 1;
  const microPassenger = passenger % 50; // passenger avaiable for microbus
  const restPeople = microPassenger % 11; // passenger available for public transport

  if (restPeople < 11 || microPassenger < 11) {
    price = restPeople * 250;
    return price;
  } else if (restPeople == 0 || microPassenger == 0) {
    return 0;
  }
}
console.log(publicBusFare(-1))

// Problem 5: isBestFriend

function isBestFriend(person1, person2) {

    // validation start
  
    if (typeof person1 !== "object" || typeof person2 !== "object") {
      return "please input objects";
    }
  
    //   validaton end
  
    if (
      person1.name.toLowerCase() == person2.friend.toLowerCase() &&
      person1.friend.toLowerCase() == person2.name.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
  const a = 'shakib'
  const b = {
    name:'Hasan', friend: 'shakib'
  }
  console.log(isBestFriend(a,b))