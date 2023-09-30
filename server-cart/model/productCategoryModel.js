const mongoose = require("mongoose")
const schema = mongoose.Schema

const products = new schema({
    category:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    products:[
        {
            name:{
                type:String,
                required:false
            },
            price:{
                type:Number
            },
            prodImg:{
                type:String
            }
        }
    ]

})

module.exports = mongoose.model("product",products)