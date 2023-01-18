const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:String,
    description:String,
    price:Number,
    qtd_product:{type:Number,default:0}
},{
    timestamps:true
})


const products = mongoose.model("Products",productSchema);

module.exports = products;