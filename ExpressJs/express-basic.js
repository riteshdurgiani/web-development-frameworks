const express = require('express')

const app = express()

//first arg : the resource 
//second the callback
app.get('/', (req, res) => {
    //chained send
    //control over what status is sent 
    res.status(200).send('Home Page')
})
app.get('/about', (req, res) => {
        res.status(200).send('About Page')
    })
    //deal with all the methods , for all the not found resources
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})
app.listen(5000, () => {
    console.log('server is listening')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.