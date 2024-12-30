const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')



router.get('/:collectionName', async(req,res)=>{
    const{collectionName} = req.params

    const collection = mongoose.connection.db.collection(collectionName)

    const data = await collection.find({}).toArray();
    // console.log(data)
    if(!data || data.length === 0){
        return res.status(404).json({error:"Data not found"})
    }

    res.status(200).json(data)

});


router.post('/cart', async(req,res)=>{
    try{
        const collection = mongoose.connection.db.collection("carts")
        const data = req.body
    
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ msg: "Invalid data: Request body is empty" });
        }

        const result = await collection.insertOne(data)
    
        res.status(201).json({msg:"successfully added data", result}) 
    }
    catch(error){
        res.status(500).json({err_msg: error.message})
    }
});





module.exports = router