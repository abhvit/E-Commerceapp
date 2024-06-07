import { ProductModel } from "../models/product.model.js";

//Instantiate ProductModel

const productModel=new ProductModel();

export default class ProductController{
    createProduct= async(req,res)=>{
        const {name, quantity}=req.body;
        console.log('working')
        try{
            const newProduct=await productModel.create(name,quantity);
            if(!newProduct){
                return res.status(400).json({data:{message: 'Failed to create the product'}});
            }
            return res.status(201).json({data: {product: newProduct}});
        }catch(error){
            console.log('Something went wrong', error);
        }
    }
    // Retrieving all products

    getProducts=async(req,res)=>{
        try{
            const products=await productModel.getAll();
            if(!products){
                return res.status(200).json({data: {message:`No products found`}});
            }
            return res.status(200).json({data: {products: products}});
        }catch(error){
            console.log('Something went wrong', error);
        }
    }
    updateProductQty=async(req,res)=>{
    
        const { id } = req.params;
        const { number } = req.body;
        try{
            const product=await productModel.update_qty(id,number);
            if(!product){
                return res.status(400).json({data: {message: 'Failed to update the product quantity'}});
            }
            return res.status(200).json({data: {product: product, message: 'updated sucessfully'}});
        }
        catch(error){
            console.log('Something went wrong', error);
        }
    }

    deleteProduct=async(req,res)=>{
        const {id}=req.params;
        try{
            const product = await productModel.delete(id);
            if(!product){
                return res.status(400).json({data: {message: 'Failed to delete the product'}});
            }
            return res.status(200).json({data: {message: 'product deleted'}});
        }catch(error){
            console.log('Something went wrong', error);
        }
    }


}