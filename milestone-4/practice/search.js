// matched product

const phones = [
    {name:'xiaomi', camera:48, price:60000},
    {name:'sony', camera:20, price:20000},
    {name:'xiaomi', camera:12, price:12000},
    {name:'oppo', camera:24, price:37000},
    {name:'iphone', camera:12, price:70000},
    {name:'samsung', camera:48, price:40000},
    {name:'sony', camera:12, price:25000},
    {name:'sumsung', camera:28, price:25000},
    {name:'Xiaomi', camera:48, price:25000},
    {name:'sumsung', camera:18, price:35000},
    {name:'sumsung', camera:20, price:25000},
]

function matched(phones, search){
    const mySearch=[]
    for(const phone of phones){
        if(phone.name.toLowerCase().includes(search.toLowerCase())){
            mySearch.push(phone)
        }
    }
    return mySearch
}
const myPhone = matched(phones, 'xiaomI')
console.log(myPhone)