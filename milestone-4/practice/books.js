// condition - if books price > 200 skip

const booksPrice = [120, 130, 150, 180, 200, 230, 240]
for(let i = 0; i<booksPrice.length; i++){
    const  price = booksPrice[i] 
    if(price > 200){
        continue
    }
    console.log(price)
}