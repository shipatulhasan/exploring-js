/*
1. if ticket numbers is less then 100, per ticket price : 100
2. if ticket numbers is more than 100, but less then 200. 
Then first 100 ticket price will be : 100 
and
rest tickets will be -- -> 90 tk

3. if you purches more then 200 tickets
First 100 -----> 100tk
101 - 200 - - - > 90tk
200+ - - -> 70tk
*/

function discountCalculator(quantity){
    const first100TicketPrice = 100
    const second100TicketPrice = 90
    const restTicketPrice = 70

    if(quantity<=100){
        const price = quantity * first100TicketPrice
        return price
    }
    else if (quantity<=200){
        const first100Price = 100 * first100TicketPrice
        const restQuantity = quantity - 100
        const restPrice = restQuantity * second100TicketPrice
        const price = first100Price + restPrice
        return price 
    }

    else{
        const first100Price = 100 * first100TicketPrice
        const second100Price = 100 * second100TicketPrice
        const first200Price = first100Price + second100Price
        const restQuantity = quantity - 200
        const restPrice = restQuantity * restTicketPrice
        const price = first200Price + restPrice
        return price 
    }

}

const ticketQuantity = 201
const totalPrice = discountCalculator(ticketQuantity)
console.log('you have to pay',totalPrice,'Tk in total for',ticketQuantity,'tickets.')