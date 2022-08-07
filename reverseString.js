function getReversedText(text){
    let reverse = ''
    for(let i = text.length-1; i>=0; i--){
        reverse+=text[i]
    }
return reverse
}

const str = 'I love programming'
const result = getReversedText(str)
// console.log('the reverse string is ',result)

// reverse sentence
// - - - - - - - - - - - -- - - - -

function getReverseword(word){
    const words = word.split(' ')
    const newArr = []
    for(let i = words.length-1; i>=0; i--){
        newArr.push(words[i])
    }
    const result=newArr.join(' ')
    return {newArr,result}

}
const myStr = 'I love to drinking tea'
const myWords = getReverseword(myStr)
console.log(myWords)