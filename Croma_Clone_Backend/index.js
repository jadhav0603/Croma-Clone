const express = require ('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require ('cors');
const userModel = require('./routes/user.Route')
const products = require('./routes/products.Route')
const cart = require('./routes/cart.Route')
const search = require('./routes/search.Route')

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'croma-clone-backend-d0pfyh5zg-vijays-projects-f2f3793e.vercel.app',
    credentials: true,
  }))


app.use('/',userModel)
app.use('/products', products)
app.use('/basket', cart)
app.use('/search',search)


app.listen(process.env.PORT, async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('server successfully connected to mongoDB')
        console.log(`server successfully running to ${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})
