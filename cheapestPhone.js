// 

const phones = [
    {name:'xiaomi', camera:48, price:60000},
    {name:'sony', camera:20, price:20000},
    {name:'xiaomi', camera:12, price:12000},
    {name:'oppo', camera:24, price:37000},
    {name:'oppo', camera:48, price:70000},
    {name:'samsung', camera:48, price:40000},
    {name:'sony', camera:48, price:25000},
    {name:'sumsung', camera:48, price:25000},
]
function chipestPhone(phones){
    let highestCam= phones[0]
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i]
        if(phone.price < highestCam.price){
            highestCam = phone
        }
    }
    return highestCam
}
const mySearch = chipestPhone(phones)
console.log(mySearch)