const Product = require('../models/product-model');

const getAllProducts = async( req,res,next) =>{
    let products;
    try {
      products = await Product.find();
    } catch (error) {
      console.log(error);
    }
  
    if(!products)
      return res.status(404).json({message:"No products found"}) 
  
    return res.status(200).json({products})
}

const getbyId = async (req,res,next)=>{
  const id = req.params.id;
  let product;

  try {
      product = await Product.findById(id);
  } catch (error) {
      console.log(error)
  }

  if(!product)
    return res.status(404).json({message:"No product found"}) 

  return res.status(200).json({product})

}

const createProduct = async (req,res,next) =>{
    const {productName, description,price,qtd_product} = req.body
    let product;
    try{
        product = new Product({
            productName,
            description,
            price,
            qtd_product
        });
        await product.save();
    }catch(err){
        console.log(err)
    }

    if(!product){
        return res.status(500).json({message:'Unable to add'})
    }

    return res.status(201).json({product})
}

const updateProduct = async (req,res,next) =>{
  const id = req.params.id;

  const {productName, description,price,qtd_product} = req.body
  let product;

  try {
      product = await Product.findByIdAndUpdate(id,{
        productName,
        description,
        price,
        qtd_product
      })
      product = await  product.save();
  } catch (error) {
      console.log(error);
  }

  if(!product){
      return res.status(500).json({message:'Unable to update product with id'})
  }

  return res.status(200).json({product})
}

const deleteProduct = async(req,res,next) =>{
  const id = req.params.id;
  let product;

  try {
      product = await Product.findByIdAndRemove(id);
  } catch (error) {
      console.log(error)
  }

  if(!product){
      return res.status(404).json({message:'Unable to delete product with id'})
  }

  return res.status(200).json({message:'product successfully delete!'})
}

exports.getAllProducts = getAllProducts;
exports.getbyId = getbyId;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
