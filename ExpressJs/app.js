const express = require('express')
const app = express();

const { products } = require('./data')


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products', (req, res) => {
        //being selective of what we are sending
        const newProducts = products.map((product) => {
            const { id, name, image } = product
            return { id, name, image }
        })

        res.json(newProducts)
    })
    // : means Route parameter 
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    res.json(singleProduct)
})


app.listen(5000, () => {
    console.log('Server is listening....')
})