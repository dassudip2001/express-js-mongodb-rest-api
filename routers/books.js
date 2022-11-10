const { json } = require('express')
const express=require('express')
const router=express.Router


// import schema
const Book=require('../models/book')


// get request
router.get('/',async(req,res)=>{
    try {
        const book= await Book.find()
        res.json(book)
        
    } catch (err) {
        res.sed('Error'+err)
    }
})


// get by id  request
router.get('/:id',async(req,res)=>{
    try {
        const book= await Book.findById(req.params.id)
        res.json(book)
        
    } catch (err) {
        res.sed('Error'+err)
    }
})




// post request
Request.post('/',async(req,res)=>{
    const book=new Book({
        name:req.body.name,
        tech:req.body.name,
        sub:req.body.name
    })

    try {
        const a1=await book.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
        // console.log();
    }
})




// patch

router.patch('/;id',async(req,res)=>{
    try {
        const book= await Book.findById(req.params.id)

        book.name=req.body.name,
        book.tech=req.body.name,
        book.sub=req.body.name
        const a1=await book.save()
        res.json(a1)
        
    } catch (err) {
        res.send('Error')
    }
})

// delete



// delete

// get by id  request
router.get('/:id',async(req,res)=>{
    try {
        const book= await Book.findById(req.params.id)
        const a1=await book.remove()
        res.json(a1)
        
    } catch (err) {
        res.sed('Error'+err)
    }
})

module.exports=router