const express = require('express');
const path = require('path')
const app = express();

//setup static middleware
//app.use is for building middleware
//static asset means file that server doesnt have to change 
//default convention to use the word public 
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})
app.listen(5000, () => {
    console.log('server listening')
})