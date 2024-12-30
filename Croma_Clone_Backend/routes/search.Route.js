const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


router.get('/:searchVal', async(req,res)=>{
    const {searchVal} = req.params;
    const collectionsArray = ["TV", "cameras", "chargers", "homeAppliances", "laptops", "mobiles", "washingMachines"];

    try{
        const searchData = collectionsArray.map(async(ele)=>{

            const Collection_Name = mongoose.connection.db.collection(ele)
    
            const data = await Collection_Name.find({product_name:{$regex: searchVal, $options:'i'}}).toArray();

            return data.length > 0 ? { ele, data } : null
        })

        const result = (await Promise.all(searchData)).filter(Boolean);

        if(!result || result.length === 0){
            return res.status(400).json({error:"result not available"})
        }

        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err_msg: error})
    }
  
})




module.exports = router;
