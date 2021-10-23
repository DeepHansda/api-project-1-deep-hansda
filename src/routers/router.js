const express = require('express');
const router = new express.Router();
const ProductModel = require('../db/models/model')

router.post("/products/add",async(req, res) => {

    try{
        const productsData = new ProductModel(req.body);
        const saveProduct = await productsData.save();
        res.status(201).send(saveProduct);
    }

    catch(err) {
        console.log(err);
    }
    
})

router.get("/products/read",async(req, res) =>{
    try{
        const productsData = await ProductModel.find();
        res.status(200).send(productsData)
    }

    catch(err) {
        res.status(500).send(err)
    }


})

router.get("/products/read/:id",async(req, res) => {

    try{

        const _id = req.params.id;
        
        const showproduct = await ProductModel.findById(_id)
    res.status(200).send(showproduct);
    console.log(showproduct)
    }

    catch(err) {
        console.log(err);
    }
    
})

// Update all documents

router.patch("/products/patch/", async(req, res) => {
    try{
        // 
        const update = await ProductModel.updateMany(req.body)
        res.status(200).send(update);
    }

    catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
})


// update findById

router.patch('/products/patch/:id', async(req, res) => {
    try{
        const _id = req.params.id;
    const updates = await ProductModel.findByIdAndUpdate(_id,req.body,{
        new: true
    });
    res.status(200).send(updates)
    console.log(updates);
    }

    catch(err){
        console.log(err);
    }
    
})


// add in all files
router.put('/products/put', async(req, res)=>{
    try{
        const addField = await ProductModel.updateMany(req.body)
        // res.status(200).send(ProductModel)
    res.status(200).send(addField);
    
    console.log(addField);
    }
    
    catch(err) {
        console.log(err);
    }
})

router.put('/products/put/:id', async(req, res)=>{

    try{
        const _id = req.params.id;
        const addField = await ProductModel.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        // res.status(200).send(ProductModel)
    res.status(200).send(addField);
    
    console.log(addField);
    }
    
    catch(err) {
        console.log(err);
    }
})


module.exports = router;