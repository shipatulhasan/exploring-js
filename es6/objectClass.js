class Instructor  {
name
designation = 'web course instructor'
team = 'web dev'
location
constructor(nickName, address){
    this.name = nickName
    this.location = address
}
startSupport(time){
    console.log(`Please start a support session at ${time}`)
}
createQuiz(module){
    console.log(`please create a quiz for ${module}`)
}
}

const shakib = new Instructor('shakib','chittagong')
console.log(shakib)
shakib.startSupport('9:00pm')
shakib.createQuiz(30)