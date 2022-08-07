function fibonacci(num){
    let fibo=[0,1]
    // let myFibo = []
    for(let i = 2; i<=num; i++){
        fibo[i]= fibo[i-2] + fibo[i-1]
        fibo.push(fibo[i])
        console.log(fibo,i,fibo[i])
    }
    return fibo
}
const num = 20
const mySeries = fibonacci(num)
console.log('\n\nMy fibonacci series: ',mySeries)
