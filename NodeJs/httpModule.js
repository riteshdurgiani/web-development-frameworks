const http = require('http')

const server = http.createServer((req, res) => {
    //request what comes in , response whats goes out
    // console.log(req)
    //req is a big gigantic object that contains a large amount of information 
    if (req.url === '/') {
        res.end('Welcome to homepage')
    }
    if (req.url === '/about') {
        res.end('This is short history')
    }
    res.end(`<h1>OOPS!</h1>
    
    <p>Page not found</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)