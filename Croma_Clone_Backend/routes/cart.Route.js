const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()


router.get("/carts", async (req, res) => {
    try {
        const cart = mongoose.connection.db.collection("carts");
        const data = await cart.find({}).toArray();

        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "Your cart is empty" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ err_msg: error.message });
    }
});

router.delete('/delete/:_id', async(req,res)=>{
    try {
        const collection = mongoose.connection.db.collection("carts")
    const {_id } = req.body
    // const name = data.product_name

    const result = await collection.deleteOne(_id)

    res.status(200).json(result)
    } 
    catch (error) {
        res.status(500).json({error : error})
    }
    

})

router.delete('/deleteAll', async(req,res)=>{
    try {
        const collection = mongoose.connection.db.collection("carts")
    // const {_id } = req.body
    // const name = data.product_name

    const result = await collection.deleteMany({})

    res.status(200).json(result)
    } 
    catch (error) {
        res.status(500).json({error : error})
    }

})



module.exports = router


