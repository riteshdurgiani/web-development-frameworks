//Event Loop Example 1
//starting the os process
console.log('first task')

setTimeout(() => {
    //     // set timeout is asynchronous 
    //     //it gets offloaded 
    //     //only when we are done with the immediate code ,i.e, the syncronous code
    //     //it gets executed
    console.log('Second Task')
}, 0)

console.log('Third Task')
    //completed and exited the operating system


//Event Loop Example 2
setInterval(() => {
    //     //again being asynchrounous , gets offloaded
    //     //unlike set timeout , it does not get stopped
    //     //keeps on executing after the given time interval
    //     //only can be killed by CTRL + C or unexpected error 
    console.log('hello world')
}, 2000)

// console.log('Hey there i run first')

//Event Loop Example 3
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello world')
})

server.listen(5000, () => {
    //listen is asynhroous 
    //it stays alive 
    console.log('Listening on port 5000')
})