const mongoose=require('mongoose')


const bookschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    tech:{
        type:String,
        require:true
    },
    sub:{
        type:Boolean,
        require:true,
        default:false
    }
})

module.exports=mongoose.model('Book','bookschema')